import React from "react";
import Head from "next/head";

export const SiteHead: React.FC = () => {
    return (
        <Head>
            <meta property="og:title" content="Sameer M. Niaz" />
            <meta property="og:description" content="Software Engineer" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://sameerniaz.com/" />
            <meta
                property="og:image"
                content="https://sameerniaz.com/portrait.jpeg"
            />
            <meta
                name="theme-color"
                content="rgb(148, 163, 184)"
                media="(prefers-color-scheme: light)"
                key="light"
            />
            <meta
                name="theme-color"
                content="rgb(15, 23, 42)"
                media="(prefers-color-scheme: dark)"
                key="dark"
            />
            <title>Sameer M. Niaz</title>
        </Head>
    );
};
