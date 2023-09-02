"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = ({ params }) => {
  const { push } = useRouter();
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
  const [dataBlog, setDataBlog] = useState();
  const [blogId, setBlogId] = useState();
  const getBlog = async () => {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/specificdata`,
      {
        cache: "no-cache",
        method: "POST",
        headers: {
          "content-type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({ blogId: params.id })
      }
    );
    const data = await res.json();
    setDataBlog(data.content);
    setBlogId(data.blogId);
  };
  const deleteBlog = async () => {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/drafted`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({ blogId: params.id })
      }
    );
    const delData = await res.json();
    if ((res.msg = true)) {
      toast.success("Data Deleted", toastOption);
      push(`/admin/list`);
    }
  };
  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      <div className="text-gray-600 body-font bg-green-100 dark:bg-slate-800 flex flex-row min-h-screen justify-center items-center pb-14">
        <ToastContainer />
        <div
          className="text-justify m-2 p-2 md:w-[50%] dark:text-slate-100"
          dangerouslySetInnerHTML={{ __html: dataBlog }}
        />
      </div>
      <button className="fixed bottom-12 right-10" onClick={deleteBlog}>
        <FaTrashAlt className="text-4xl text-red-600" />
      </button>
      <Link href={`/admin/edit/${blogId}`}>
        <button className="fixed bottom-12 left-10">
          <FaEdit className="text-4xl text-red-600" />
        </button>
      </Link>
    </>
  );
};

export default Page;
