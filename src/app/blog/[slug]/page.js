import Quicklink from "@/app/components/Quicklink";
import React from "react";

export async function generateMetadata({ params }, parent) {
  const id = params.id;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/slugview`,
    {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug: params.slug }),
    }
  );
  const blogPost = await data.json();

  return {
    title: blogPost.title,
    description: blogPost.desc,
    alternates: {
      canonical: `${process.env.FRONTEND_LINK}/blog/${blogPost.slug}`,
      // languages: {
      //   "en-US": `${process.env.FRONTEND_LINK}/en-US/blog/${blogPost.slug}`,
      // },
    },
  };
}

const Page = async ({ params }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/slugview`,
    {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug: params.slug }),
    }
  );
  const blogPost = await data.json();
  const nameOne = "Home";
  const linkOne = process.env.FRONTEND_LINK;
  const nameTwo = blogPost.category;
  const linkTwo = `${process.env.FRONTEND_LINK}/${blogPost.category}`;
  const nameThree = blogPost.title;
  const linkThree = `${process.env.FRONTEND_LINK}/blog/${blogPost.slug}`;

  return (
    <>
      <Quicklink
        linkOne={linkOne}
        linkTwo={linkTwo}
        linkThree={linkThree}
        nameOne={nameOne}
        nameTwo={nameTwo}
        nameThree={nameThree}
      />
      <div className="pb-14 text-gray-600 body-font bg-green-100 dark:bg-slate-800">
        <div className="flex flex-row min-h-screen justify-center items-center pt-10">
          <div
            className="text-justify mx-5 w-[100vw] md:w-[50%] text-black dark:text-slate-100"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="font-extrabold capitalize dark:bg-slate-500 text-slate-500 dark:text-slate-100 bg-gray-200 text-center m-2 p-2 w-[100%] md:w-[50%] rounded-xl">
            Author: {blogPost.author}
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
// export default Page({ params });
