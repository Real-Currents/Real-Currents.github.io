"use client";
import { useEffect } from "react";
// import * as svelteMainApp from './svelt-main.js';

export default function StaticRewriteComponent (props: { uri: string}) {

    const { uri } = props;

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.location.hostname.match(/localhost/) === null) {
                window.history.replaceState(
                    {},
                    "",
                    uri
                );
                // window.alert("scrollTo(0,0)");
                window.scrollTo(0, 0);
            }

            if (window.hasOwnProperty("document")) {
                console.log("document exists:", document);
            }
        }

    }, []);

    return (
        <span style={{ visibility: "hidden" }}>
            Update navigation to read {uri}
        </span>
    );
}

