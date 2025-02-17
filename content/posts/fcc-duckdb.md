---
title: Fast analytics on FCC's (big) data
author:
  - John Hall
  - Olivier Leroy
date: '2024-08-16'
categories:
  - cli
  - code
  - duckDB
  - broadband
draft: false
format:
  gfm:
    variant: +yaml_metadata_block
image: thumbnail.png
---


## Overview

In this series of posts, we aim to:

- Frame the pressing challenges faced by rural broadband providers.
- Briefly explore the wealth of available public data.
- Share the data and tools we’ve developed to help rural broadband
  providers maximize their access to the unprecedented influx of public
  and private investment funding.

One of our goals at the
<a href="https://ruralinnovation.us/" class="external"
target="_blank">Center on Rural Innovation (CORI)</a> is to provide
insights and practical applications that can empower stakeholders to
bridge the digital divide and support equitable internet access in
underserved communities.

## The challenge and the opportunity

Access to reliable and high-speed broadband is more critical than ever,
yet vast areas of rural America remain underserved. This digital gap
limits opportunities for education, healthcare, economic growth, and
civic engagement in these regions. With billions of dollars in federal
and state funding now available, the ability to analyze and interpret
broadband data effectively is paramount. Providers need actionable
insights to identify unserved and underserved areas, optimize funding
applications, and plan infrastructure investments that meet local needs.

The convergence of new funding opportunities and improved datasets
represents an unprecedented opportunity to close the digital divide. By
leveraging accurate data and strategic planning, rural broadband
providers can maximize their impact and secure funding to expand their
services.

## The available data

The following explanation of the data sourced from the FCC is extracted
from CORI’s <a href="https://ruralinnovation.github.io/proj-fcc-report/"
target="_blank">FCC report</a>, a work-in-progress exploratory data
analysis produced by
<a href="https://github.com/defuneste" target="_blank">Olivier Leroy</a>.
Please visit the report for a deeper analysis of various aspects of this
data.

We rely on two key datasets from the Federal Communications Commission
(FCC)

1)  **National Broadband Map**
    (<a href="https://broadbandmap.fcc.gov/home" target="_blank">NBM</a>):

- Provides granular information on broadband service availability at
  specific locations, including details about service providers,
  technology types, and advertised speeds.

2)  **Broadband Funding Map**
    (<a href="https://fundingmap.fcc.gov/home" target="_blank">BFM</a>):

- Offers insights into federally funded broadband infrastructure
  projects, detailing program boundaries and project-level information.

Both datasets are publicly available under permissive licensing, making
them invaluable tools for analyzing broadband coverage and funding
opportunities. Licensing information can be found
<a href="https://broadbandmap.fcc.gov/about" target="_blank">here</a>
and <a href="https://fundingmap.fcc.gov/about" target="_blank">here</a>,
respectively.[^1]

### What are these two datasets?

On March 23, 2020, the Broadband Deployment Accuracy and Technological
Availability Act or *Broadband DATA Act* was enacted[^2]. This led to
the FCC’s creation of the National Broadband Map (NBM) in November
2022[^3] and the Broadband Funding Map in May 2023[^4] (documented in
July 2023[^5]) as the primary methods of publicly releasing these data
sets.

#### National Broadband Map (NBM)

The NBM offers detailed broadband availability information:

- Identifies providers and technologies at each location.
- Classifies locations as residential, business, or both.
- Localizes data to census blocks or H3 hexagons.

This dataset is an abstraction of the “Fabric” locations data developed
by **CostQuest**. The Fabric provides precise geolocation data for
**Broadband Serviceable Locations** (BSLs), which are updated biannually
(June and December) with interim updates every two weeks. The exact
coordinates for each locations are only inclued in the Fabric dataset,
so using the National Broadband Map data we can only link a record for a
location to a Census Block (2020 vintage) or H3 hexagon.

Every location is characterized by:

- Who is providing those services (`frn`, `provider_id`, and
  `brand_name`)
- A description of each of the services (`technology`,
  `max_advertised_download_speed`, `max_advertised_upload_speed`,
  `low_latency`)
- Whether the location is characterised as residential, business or both
- Ways to geographically locate it (`state_abbr`, `block_geoid`,
  `h3_res8_id`)

> [!TIP]
>
> A location (see [What is a
> BSL?](#what-is-a-broadband-serviceable-location-bsl)) can be covered
> by multiple Internet Services Provides (ISP) with potentially
> different services and technologies. Hence, it can represented in the
> data can by many “rows”.

<div class="aside">

Sometimes the process of collecting those two datasets is called
**B**roadband **D**ata **C**ollection (BDC)

</div>

#### Broadband Funding Map (BFM)

The BFM provides information about “*broadband infrastructure deployment
projects funded by the Federal government throughout the United
States*”. The public data:

- Categorizes projects by program and geographic boundaries.
- Highlights funding from four federal agencies across 12 programs,
  including 1,853 projects as of May 2024.
- Provides a critical resource for identifying areas targeted for
  infrastructure investment.

The information is structured either at the scale of a specific project
inside a program or for the whole program. Hence we have characteristics
for each project, including their associated boundaries (territories
covered) (see
<https://ruralinnovation.github.io/proj-fcc-report/fcc_funding.html>).

### What is a Broadband Serviceable Location (BSL)?

A Broadband Serviceable Location (BSL) is defined as a location in the
U.S. where fixed broadband internet access service is available or can
be installed. These include:

- Residential BSLs: Housing units or group quarters as defined by the
  U.S. Census Bureau.
- Business BSLs: Non-residential structures, such as government or
  nonprofit facilities, on properties without residential locations.

> A broadband serviceable location is defined as “a business or
> residential location in the United States at which fixed broadband
> Internet access service is, or can be, installed.” A residential BSL
> includes all residential structures, including structures that are (or
> contain) housing units or group quarters (as those terms are defined
> by the United States Census Bureau). A business BSL includes “all
> non-residential (business, government, non-profit, etc.) structures
> that are on property without residential locations and that would
> expect to demand Internet access service.” (source FCC[^6])

#### Geographic coverage

- **Broadband Availability Data**: Covers all U.S. states, Puerto Rico,
  and U.S. territories.
- **Funding Map Data**: Varies by program, with coverage reflecting
  specific project boundaries.

### What is “Unserved” vs. “Underserved”?

The FCC defines broadband access levels as follows:

- Served: Locations with at least one service offering speeds of 100/20
  or higher.
- Underserved: Locations with speeds of at least 25/3 but below 100 Mbps
  download / 20 Mbps upload (100/20).
- Unserved: Locations with maximum advertised speeds below 25 Mbps
  download / 3 Mbps upload (25/3).

Served, Unserved and Underseved are **overlapping** categories at the
**location level**. They can be extended at the “**area level**”.

These definitions, rooted in the [FCC’s Broadband Speed
Benchmark](https://www.fcc.gov/document/fcc-increases-broadband-speed-benchmark),
can be adapted by states to suit local conditions[^7].

## Tools for big broadband analytics

To support broadband providers and policymakers, we have developed the
following tools:

**`cori.data.fcc`**: \[TODO: main tool highlighted in this article …}

**Interactive Rural Broadband Map**: Visualizes broadband availability
and funding data to identify gaps and opportunities.

**Broadband Climate Risk Mitigation Tool**: Assesses climate risks to
broadband infrastructure to enhance resiliency.

TODO … write more about `cori.data.fcc` …

<br />

### Footnotes

<br />

[^1]: <em>License and Attribution language from the FCC<em>: <br />
    <br /> Broadband availability data from the BDC, and data from the
    U.S. Census Bureau that are presented on this site, are offered free
    and not subject to copyright restriction. Data and content created
    by government employees within the scope of their employment are not
    subject to domestic copyright protection under 17 U.S.C. § 105. See,
    e.g., [U.S. Government
    Works](https://www.usa.gov/government-copyright). <br /> <br />
    While not required, when using in your own work content, data,
    documentation, code, and related materials from fcc.gov or
    broadbandmap.fcc.gov, we ask that you provide proper attribution of
    the data. Examples include: <br /> <br /> Source data: FCC Broadband
    Funding Map <br /> Map layer based on FCC BFM <br /> <br />
    CostQuest Associates, Inc. and its third-party licensors, as
    applicable, own all right, title, and interest, including all
    intellectual property rights, in and to the data for locations
    reflected in the Fabric (including the Location ID, latitude and
    longitude, address, unit count, and building type code for each
    location in the Fabric). CostQuest is granted certain rights to
    Fabric correction submissions for the purpose of correcting or
    otherwise modifying BDC Fabric data. Broadband service providers,
    governmental entities, and other third parties are able to license
    Fabric data, including any changes to Fabric data that have been
    made as a result of challenges, at no cost for purposes of their
    participation in the FCC’s Broadband Data Collection.

[^2]: <a href="https://crsreports.congress.gov/product/pdf/r/r45962"
    target="_blank">Broadband_Data_and_Mapping_Background_and_Issues_for_the_117th_Congress</a>

[^3]: <a
    href="https://www.fcc.gov/news-events/notes/2022/11/18/new-broadband-maps-are-finally-here"
    target="_blank">https://www.fcc.gov/news-events/notes/2022/11/18/new-broadband-maps-are-finally-here</a>

[^4]: <a href="https://docs.fcc.gov/public/attachments/DA-23-410A1.pdf"
    target="_blank">https://docs.fcc.gov/public/attachments/DA-23-410A1.pdf</a>

[^5]: <a href="https://us-fcc.app.box.com/v/bfm-data-downloads-output"
    target="_blank">https://us-fcc.app.box.com/v/bfm-data-downloads-output</a>

[^6]: [“The Fabric
    data”](https://help.bdc.fcc.gov/hc/en-us/articles/7412732399003-Fabric-FAQs)

[^7]: Page 4
    [https://www.pewtrusts.org/-/media/assets/2023/06/un–and-underserved-definitions-ta-memo-pdf.pdf](https://www.pewtrusts.org/-/media/assets/2023/06/un--and-underserved-definitions-ta-memo-pdf.pdf)
