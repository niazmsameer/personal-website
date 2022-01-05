import type { NextPage } from "next";
import { MailIcon } from "@heroicons/react/solid";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div
            className="h-screen w-screen mx-auto flex justify-center items-center
                     bg-slate-400 dark:bg-slate-900 transition-all"
        >
            <Head>
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
            <div
                className="w-4/6 max-w-md m-0 flex flex-col justify-center items-center rounded-md
                          shadow-xl backdrop-brightness-150 transition-all hover:shadow-2xl
                          hover:backdrop-brightness-200 hover:-translate-y-2
                          dark:text-white sm:flex-row"
            >
                <div className="w-full p-4 flex justify-center items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="h-auto w-auto max-h-full max-w-full my-auto rounded-full"
                        src="/portrait.jpeg"
                        alt="Portrait of Sam"
                    />
                </div>
                <div className="w-full p-4 flex flex-col justify-center">
                    <div>
                        <h1 className="text-2xl font-bold">Sameer M. Niaz</h1>
                        <h2 className="text-lg">Software Developer</h2>
                    </div>
                    <div className="mt-1 flex flex-row">
                        <a href="mailto:sam@sameerniaz.com">
                            <MailIcon className="h-6 mr-2 cursor-pointer opacity-70 hover:opacity-100" />
                        </a>
                        <a
                            className="opacity-70 hover:opacity-100"
                            href="https://github.com/niazmsameer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
