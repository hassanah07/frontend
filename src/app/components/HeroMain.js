import Link from "next/link";
import React from "react";

const HeroMain = () => {
  return (
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl title-font mb-2 text-pink-900 capitalize font-extrabold dark:text-slate-300">
        Guide Wale
      </h1>
      <div className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-justify capitalize dark:text-slate-300">
        Guide Wale is not only a Income share Blog Writing Platform but It is
        also a Hive of Programmers. We are a Team of Programmers and We are
        always ready to work on your upcoming Web based Project
      </div>
      <div className="lg:w-1/2 w-full leading-relaxed text-gray-500 capitalize justify-between">
        <Link href="/talk">
          <button className="bg-yellow-500 hover:bg-red-500 px-6 py-2 font-bold text-slate-700 hover:text-slate-200 hover:shadow-2xl hover:transition-all mx-2">
            Lets Talk
          </button>
        </Link>
        <Link href="/pricing">
          <button className="bg-red-500 hover:bg-yellow-500 px-6 py-2 font-bold text-slate-700 hover:text-slate-200 hover:shadow-2xl hover:transition-all mx-4">
            Pricing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroMain;
