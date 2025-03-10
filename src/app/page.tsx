import React from "react";
import Markdown from "markdown-to-jsx";
import PostCard from "@/components/PostCard";
import { Post } from "@/types";
import { cleanMarkdownToJSContent, getIntroContent } from "@/utils";
import Link from "next/link";

export default function Home() {
    const introMatter = getIntroContent();
    const postMetadata: Post[] = // await fetch('https://.../posts').then((res) => res.json())
        [
            // { title: "Apple Pie", slug: "apple_pie" }, // => /content/recipes/apple_pie.html
            // { title: "Banana Bread", slug: "banana_bread" }, // => /content/recipes/banana_bread.html
            // { title: "Blueberry Scones", slug: "blueberry_scones" }, // => /content/recipes/blueberry_scones.html
            // { title: "Chocolate Chip Cookies", slug: "chocolate_chip_cookies" }, // => /content/recipes/chocolate_chip_cookies.html
            // { title: "Cinnamon Rolls", slug: "cinnamon_rolls" }, // => /content/recipes/cinnamon_rolls.html
            // { title: "Lemon Poppy Seed Muffins", slug: "lemon_poppy_seed_muffins" }, // => /content/recipes/lemon_poppy_seed_muffins.html
            {
                title: "Democratizing analytics on FCC's (big) data",
                content: "",
                contentRoot: "content/posts",
                slug: "cori-intro", // => /content/posts/cori-intro.html
                date: new Date('2025-02-13'),
                description: "The FCC’s public release of the National Broadband Map should, in theory, allow broadband providers to maximize their access to the unprecedented availability of public and private investment funding, but utilizing this data continues to pose challenges for rural service providers..."
            },
            {
                title: "Three.js Portal Effect",
                content: "",
                contentRoot: "threejs-portal-effect",
                slug: "", // => /threejs-portal-effect/index.html
                date: new Date('2025-01-31'),
                description: "Three.js - WebXR Portal Effect (a demo of how to use clipping planes to construct/project WebXR scene in mixed reality  - through the portal!)"
            },
            {
                title: "Visualizing R Data with SveltR",
                content: "",
                contentRoot: "content/posts",
                slug: "visualize-r", // => /content/posts/visualize-r.html
                date: new Date('2020-03-14'),
                description: "R has some methods for turning R data into JavaScript or JSON data and printing the results within HTML tags..."
            }
        ];

    console.log(postMetadata);
    console.log(introMatter);

    return (
        // <main className={styles.main}>
        <main className={"content"}>
            <div className={"intro"}>
                {/* TODO: Collapse intro text and add "Read more" callout */}
                <Markdown>{cleanMarkdownToJSContent(introMatter.content)}</Markdown>
            </div>
            <br />
            <div className={"postContainer"}>
                {postMetadata.map((post, index) => {
                    return (
                        <PostCard contentRoot={(post["contentRoot"] || "content/posts")}
                                  key={"post-" + index}
                                  post={(post as Post)}>
                        </PostCard>
                    );
                })}
            </div>
            <br />
            <Link className={"unstyled"}
                  href={`/content/dev`} >
                <h2>Meet the developer!</h2>
            </Link>
        </main>
  );
}
