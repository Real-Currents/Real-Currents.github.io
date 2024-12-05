import fs from "fs";
import matter from "gray-matter";
import { HeaderLayoutProps, Post } from "@/types";

export function getContent (contents: string) {
    const matterResult = matter(contents);

    // for (const p in matterResult) {
    //     if (matterResult.hasOwnProperty(p)) {
    //         console.log("property in matter: ", p);
    //     }
    // }

    if (matterResult.hasOwnProperty("content")) {
        matterResult.content = matterResult.content
            .toString().replace(/class\=/, "className=");
    }

    return matterResult;
}

const introFileContent = fs.readFileSync(`./content/index.md`, "utf8");

export const metadata: HeaderLayoutProps = {
    ...getContent(introFileContent).data,
    title: "Real~Currents",
    description: "Experiments in Information Experience Design (IxD)",
};

export function getIntroContent() {
    const file = `./content/index.md`;
    const content = fs.readFileSync(file, "utf8");

    const matterResult = matter(content);
    return matterResult;
}

export function getPostMetadata (basePath: string): Post[] {
    const dir = basePath + "/";
    const files = fs.readdirSync(dir);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    return markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
        const matterResult = matter(fileContents);

        if (matterResult.hasOwnProperty("content")) {
            matterResult.content = matterResult.content
                .toString().replace(/class\=/, "className=");
        }

        return {
            ...getContent(fileContents).data,
            slug: filename.replace('.md', '')
        } as Post;
    });
}

export function cleanMarkdownToJSContent (content: string) {
    const result = content.replace(/class=/g, "className=");
    console.log(content.match(/(class=)/g));
    return result;
}
