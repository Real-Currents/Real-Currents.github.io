import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Comfortaa, Inter, Bitter, Montserrat, Roboto } from "next/font/google";
import { getIntroContent } from "@/utils";

import "./fonts.css";
import "./globals.css";
import StaticRewriteComponent from "@/components/StaticRewriteComponent";

const comfortaa = Comfortaa({ subsets: ["latin"] });

interface HeaderLayoutProps extends Metadata {
    title: string,
    description?: string,
    subtitles?: string[]
}

// TODO: Populate metadata from index.md front matter
export const metadata: HeaderLayoutProps = {
    ...getIntroContent().data,
  title: "Real~Currents",
  description: "Experiments in Information Experience Design (IxD)",
};

// TODO: Use metadata props to build header
function HeaderLayout ({ title, description, subtitles }: HeaderLayoutProps) {
  return (
      <header>
          <div id={"trademark"}>
              {(!!subtitles && subtitles.length > 0) ?
                  subtitles.map((s, i) => (<span key={`sub-${i}`}>{s}<br/></span>)) :
                  <br />
              }
          </div>

          <div id={"title"} className={"titles"}>
              <Link href={"/"}><h1>
                  {(!!title && title.length > 0) ?
                      title.split("~").map((t, i) => {
                          // console.log(t);
                          return (i % 2 < 1) ?
                              <span key={`title-${i}`} style={{color: "#00FF00"}}>{t}</span> :
                              <span key={`title-${i}`} style={{color: "rgb(17,187,255)"}}>~{t}</span>
                      }) :
                      <></>
                  }
              </h1></Link>
          </div>

          <div></div>
      </header>
  );
}

function FooterLayout () {
  return (
      <footer>
          <p id="copyright"></p>
          <p id="built_with">
              ...built with <a href="https://nextjs.org/docs" target="_blank">Next.js</a>&nbsp;
              &&nbsp;<a href="https://quarto.org/docs/get-started/" target="_blank">Quarto</a>
          </p>
      </footer>
  );
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    console.log(metadata);

    return (
        <html lang="en">
        <body className={comfortaa.className}>

        <div id={"background_container"}>
            <div id={"background_app"} role={"main"} style={{minWidth: "100vw"}}>
            </div>

            <FooterLayout></FooterLayout>
        </div>

        <div id={"transparent_background"}></div>

        <div id={"home_screen"}>
            <HeaderLayout title={metadata["title"]!}
                          subtitles={metadata["subtitles"]!}
                          description={metadata["description"]!}></HeaderLayout>

            <div id={"content"}>
                {/*<main id="svelte-app" role="main svelte-app"></main>*/}
                {children}
            </div>

            <div id={"details"}>
                <p id={"contact-details"}>
                    <span>*</span>&nbsp;<em>Please contact John for details and demos: <a href="mailto:john@real-currents.com">john@real-currents.com</a></em>
                </p>
                <p id={"license-details"}>
                    <em>Unless otherwise noted here, this content is licensed under the <a href="http://creativecommons.org/licenses/by-sa/3.0/nz/deed.en_GB">Creative Commons Attribution-ShareAlike 3.0 License, 2009-2025</a></em><br />
                    <img src="http://i.creativecommons.org/l/by-sa/3.0/nz/88x31.png" alt="Creative Commons Licence" />
                </p>
            </div>

        </div>

        </body>
        </html>
    );
}
