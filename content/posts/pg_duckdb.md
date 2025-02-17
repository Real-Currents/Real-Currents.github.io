---
title: From elephant to duck!
author:
  - John Hall
  - Olivier Leroy
date: '2024-07-14'
draft: true
categories:
  - cli
  - code
  - postgresql
  - duckDB
  - broadband
format:
  gfm:
    variant: +yaml_metadata_block
image: pg_duckdb/DuckDB_Postgre_SQL_Logo.png
---


> [!NOTE]
>
> This article was originally posted by
> <a href="https://github.com/defuneste" target="_blank">Olivier Leroy</a>
> on the
> <a href="https://ruralinnovation.github.io/blog/" class="external"
> target="_blank">Mapping &amp; Data Analytics Blog</a> that is
> published by the
> <a href="https://ruralinnovation.us/" class="external"
> target="_blank">Center on Rural Innovation (CORI)</a>.

There are a lot of conversations — understandably — on the use of
<a href="https://parquet.apache.org/" class="external"
target="_blank">Apache Parquet</a>,
<a href="https://arrow.apache.org/" class="external"
target="_blank">Apache Arrow</a> and
<a href="https://duckdb.org/" class="external"
target="_blank">DuckDB</a>.

- **Apache Parquet** is an open source columnar file format storage
  designed for fast I/O

- **Apache Arrow** is a standardization of an in-memory representation
  of the data: it allows “zero copy” (use of pointer at low level), it
  is an OLAP (Online Analytical Process) runtime, with deferred or lazy
  materialization (internally optimizes queries for us).

- **DuckDB** is an implementation (i.e an engine) of an OLAP database.

Those three open source technologies and the amount of resources that a
personal laptop has now have lowered the need of using a classic RDBMS
for out-of-memory-tasks for data science works, and in some cases maybe
the need of using a distributed computing framework like Spark.

Let’s see an example of how they can be used to convert a table in a
PostgresSQL database to a parquet file:

## Libraries and data (optional) needed

``` r
library(duckdb)
library(dplyr, warn.conflicts = FALSE)
library(dbplyr, warn.conflicts = FALSE)
```

We will use FCC NBM raw data with December 2023’s release. You can learn
more about on FCC
<a href="https://broadbandmap.fcc.gov/data-download" class="external"
target="_blank">website</a>.

The table we will be converting has a size of 102 GB (without indexes),
has 888,176,676 rows and 12 columns and it is the results of importing
around 440 CSVs.

## Getting your credentials

Since this exercise is all about converting data that is currently
stored in PostgreSQL (using `R`), the first step in connecting to your
PG database server is getting your credentials. We are assuming here
that you have a `.pgpass` file located in your home directory
(`~/.pgpass`).

The code below will assume that you have this
<a href="https://www.postgresql.org/docs/current/libpq-pgpass.html"
class="external" target="_blank">~/.pgpass</a> set and that it contains
a one-line connection string.

``` r
get_cred <- function(path_pgpass) {
  pgpass <- readLines(path_pgpass)
  cred <- unlist(strsplit(pgpass, ":"))
  names(cred) <- c("host", "port", "db", "user", "pwd")
  return(cred)
}

cred <- get_cred("~/.pgpass")
```

## Use DuckDB magic to convert it!

Well, the magic is a four-step steps process:

1.  Connect to DuckDB
2.  Get DuckDB’s postgres extension
3.  Connect to your DB (with the credential we have set)
4.  Use DuckDB COPY specifying where and how you want it to be
    partitioned

This will be wrapped in one function:

``` r
# yes I am terrible at naming
from_elephant_to_duck <- function(table_name, path_for_parquet, part1, part2) {
  # 1. Connect to duckDB
  con <- DBI::dbConnect(duckdb())
  DBI::dbExecute(con,
                 sprintf("SET temp_directory ='%s';", tempdir()))
  # cleaning up after the function
  on.exit(DBI::dbDisconnect(con), add = TRUE)
  
  # 2. install and load PG extension
  DBI::dbExecute(con, "INSTALL postgres")
  DBI::dbExecute(con, "LOAD postgres")

  # 3. Connect, "attach" to your PG server
  attach_string <- sprintf(
    "ATTACH 'dbname=%s user=%s password=%s host=%s' AS db (TYPE POSTGRES, READ_ONLY)",
    cred["db"],
    cred["user"],
    cred["pwd"],
    cred["host"]
  )
  DBI::dbExecute(con, attach_string)

  # 4. Copy to a parquet
  copy_string <- sprintf("COPY 
    (SELECT * 
      FROM db.%s)
    TO '%s' (FORMAT 'parquet', PARTITION_BY(%s, %s))", 
    table_name, 
    path_for_parquet, 
    part1, part2)
  DBI::dbExecute(con, copy_string)

  return(invisible(path_for_parquet))
}
# not an improvement on this function will be to take cred has an argument
```

### Partitioning

Deciding how to partition a parquet is both a data and business
decisions. In this case, `state_abbr` and `technology` are good
tradeoffs in terms of the overall size of each parquet file and the fast
performance of common filtering and grouping operations on this data.

## Let’s do it and do some quick comparisons

``` r
start <- Sys.time()
from_elephant_to_duck("staging.dec23", "dec23", "state_abbr", "technology")
end <- Sys.time()
end - start
# Time difference of 58.92108 mins
```

On a relatively new MacBook with a wifi-internet-speed connection
(probably the limiting factor here) it took a little less than an hour
to run `from_elephant_to_duck`.

We can also compare our 102 GB to the size of parquet files (ofc. PG
offer additional perks!):

``` bash
du -sh dec23/
# 14 G
```

Finally, just for the pleasure, let’s run a quick query:

``` r
start <- Sys.time()
con <- DBI::dbConnect(duckdb::duckdb(), shutdown = TRUE, dbdir = tempdir())

reading_string <-
  sprintf("read_parquet('%s/*/*/*.parquet', hive_partitioning = true)",
          "dec23")
fcc <- dplyr::tbl(con, reading_string)

# check number of row
fcc |> 
  summarize(tot_rows = count(location_id)) |> 
  collect()

# A tibble: 1 × 1
#    tot_rows
#       <dbl>
# 1 888176676

# let's start one a bit 
start <- Sys.time()
# this will count every location_id by state_abbr and frn
# that have low_latency
start <- Sys.time()
q1 <- fcc |>
  filter(low_latency == TRUE) |> 
  summarize(
    count_location =  n_distinct(location_id),
    .by = c(state_abbr, frn)
  )

rez_q1 <- collect(q1)
end - start
# Time difference of 4.262549 mins

DBI::dbDisconnect(con)
```

Impressive, isn’t it? We will probably dig a bit deeper on those new
technologies in future blog posts, so check back soon!
