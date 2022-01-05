import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div
            className="h-screen w-screen mx-auto flex justify-center items-center
                     bg-slate-400 dark:bg-slate-900 transition-all"
        >
            <div
                className="container h-32 w-64 flex justify-center items-center rounded-md
                          shadow-xl backdrop-brightness-150 cursor-pointer transition-all
                          hover:shadow-2xl hover:backdrop-brightness-200 hover:-translate-y-2
                          dark:text-white"
            >
                Test
            </div>
        </div>
    );
};

export default Home;
