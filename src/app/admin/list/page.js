"use client";
import React, { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT = 6;
const Page = () => {
  const { push } = useRouter();
  const reqUrl = process.env.NEXT_PUBLIC_HOST;
  const toastOption = {
    theme: "dark",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  };
  const [blogData, setBlogData] = useState([]);
  // token Verifying that the login user is valid
  const logResult = async () => {
    const token = localStorage.getItem("token");
    let res = await fetch(`${reqUrl}/api/auth/tokenverify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify()
    });
    res = await res.json();
    if (res === false) {
      localStorage.removeItem("token");
      push("/login");
    }
  };
  // infinite scrolling starts from here
  const [activePage, setActivePage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [newData, setNewData] = useState([]);
  const fetchData = async () => {
    const data = {
      page: activePage,
      pageSize: LIMIT
    };
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/getdata`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
      }
    );
    res = await res.json();
    const blogs = res.blogposts;
    setActivePage(activePage + 1);
    setNewData([...newData, ...blogs]);
    setTotalBlogs(res.totalItems);
  };

  useEffect(() => {
    fetchData();
    logResult();
  }, []);

  return (
    <div className="text-gray-600 body-font bg-green-100 dark:bg-slate-800  flex flex-col min-h-screen items-center justify-center py-5 pb-14">
      <InfiniteScroll
        dataLength={newData.length}
        next={fetchData}
        hasMore={newData.length < totalBlogs}
        loader={<h4 className="text-red-600 font-semibold">Loading...</h4>}
        endMessage={
          <h4 className="text-red-600 font-semibold capitalize">
            You have reached the End
          </h4>
        }
      >
        {newData.map((item) => {
          return (
            <Link
              href={`/admin/list/${item.blogId}`}
              key={item._id}
              className="md:w-[90%] mt-2 flex-col py-4 text-slate-700"
            >
              <div className="py-10 bg-green-400 text-inherit shadow-xl rounded-lg my-8">
                {item.title}
              </div>
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Page;
