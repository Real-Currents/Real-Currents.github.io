import * as React from "react";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { Post } from "@/types";
import {
    metadata,
    // getPostMetadata as getMetadata
} from "@/utils";
import StaticRewriteComponent from "@/components/StaticRewriteComponent";

interface ContentParams {
    params: Post;
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams (): Promise<Post[]> {
    // const posts = // await fetch('https://.../posts').then((res) => res.json())
    //     [
    //         { slug: "apple_pie" }, // => /content/apple_pie.html
    //         { slug: "banana_bread" }, // => /content/banana_bread.html
    //         { slug: "blueberry_scones" }, // => /content/blueberry_scones.html
    //         { slug: "chocolate_chip_cookies" }, // => /content/chocolate_chip_cookies.html
    //         { slug: "cinnamon_rolls" }, // => /content/cinnamon_rolls.html
    //         { slug: "lemon_poppy_seed_muffins" } // => /content/lemon_poppy_seed_muffins.html
    //     ];

    const slug_metadata = [
        // ...getMetadata("content/posts"),
        {
            title: 'JS Demos',
            author: 'Revlin John',
            date: '2020-07-05',
            draft: false,
            categories: [ 'GL' ],
            tags: [ 'GL', 'HTML5', 'JavaScript', 'JS', 'Video', 'WebGL' ],
            format: {
                gfm: {
                    variant: '+yaml_metadata_block'
                }
            },
            slug: 'js-demos.html'
        }
    ];

    console.log("slug_metadata:", slug_metadata);

    return (
        slug_metadata
    );
}

export async function generateMetadata ({ params }: ContentParams) {
    const id: string = (!!params?.slug) ? params.slug : '';
    return {
        title: `${metadata.title} - ${id.replaceAll("_", " ")}`
    }
}

function getContent (slug: string) {
    const file = `./content/${slug.replace(".html", "")}/index.md`;
    const content = fs.readFileSync(file, "utf8");

    const matterResult = matter(content);
    return matterResult;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function ContentPage ({ params }: ContentParams) {
    const { slug } = params;
    const postMatter = getContent(slug);

    return (
        <main>
            <article>
                <Markdown>{postMatter.content}</Markdown>
            </article>
            <StaticRewriteComponent uri={`/content/${slug}.html`} />
        </main>
    );
}
