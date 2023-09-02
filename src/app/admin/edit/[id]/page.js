"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const Page = ({ params }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [blogId, setBlogId] = useState();
  const [content, setContent] = useState();
  const getBlog = async () => {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/specificdata`,
      {
        cache: "no-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ blogId: params.id })
      }
    );
    const data = await res.json();
    setContent(data.content);
    setBlogId(data.blogId);
    setTitle(data.title);
    setSlug(data.slug);
    setShortDesc(data.desc);
  };
  const editor = useRef(null);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "video"],
      ["clean"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video"
  ];
  const config = {
    readonly: false,
    height: "450px",
    width: "100%",
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    toolbarAdaptive: true,
    toolbarSticky: true,
    imageDefaultWidth: 250,
    style: {
      background: "#27272E",
      color: "rgba(255,255,255,0.5)"
    }
  };
  const toastOption = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
  };

  const router = useRouter();
  const logResult = async () => {
    let logResponse = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/auth/getuserdata`,
      {
        cache: "no-cache",
        method: "POST", // or 'PUT'
        headers: {
          "content-type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify()
      }
    );
    const data = await logResponse.json();
    if (data.msg != true) {
      localStorage.removeItem("token");
      router.push("/login");
    }
  };

  const handleChange = (e) => {
    if (e.target.name == "slug") {
      setSlug(e.target.value);
    } else if (e.target.name == "title") {
      setTitle(e.target.value);
    } else if (e.target.name == "desc") {
      setShortDesc(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    const updateId = Math.round(Math.random() * 1000011119);
    const payload = {
      blogId: params.id,
      content,
      updateId,
      title,
      slug,
      desc: shortDesc
    };
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify(payload)
      }
    );
    res = await res.json();
    if (res.status == true) {
      toast.success(res.msg, toastOption);
      router.push("/admin/list");
    } else {
      toast.error(res.msg, toastOption);
    }
  };
  useEffect(() => {
    getBlog();
    logResult();
  }, []);
  return (
    <div className="pb-16">
      <ToastContainer />
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => {}}
      />
      <div className="py-2"></div>

      <div className="w-full flex flex-wrap p-2">
        <div className="w-1/2 py-2 px-2">
          <input
            value={title.replace(/[^a-zA-Z0-9 ]/g, "")}
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            placeholder="Type Your Article's Title"
            className="py-2 w-full text-slate-500"
            required
          />
        </div>
        <div className="w-1/2 py-2 px-2">
          <input
            value={title}
            type="text"
            name="slug"
            id="slug"
            onChange={handleChange}
            placeholder="Short Title"
            className="py-2 w-full text-slate-500"
            required
          />
        </div>
        <div className="w-full py-2 px-2">
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="5"
            onChange={handleChange}
            value={shortDesc}
            placeholder="Write a short description for google SEO. You can copy Description from above written Article"
            className="py-2 w-full text-slate-500"
            required
          ></textarea>
        </div>
      </div>
      <div className="mx-4 flex items-center justify-center">
        <button
          onClick={handleSubmit}
          className="flex ml-0 text-slate-100 bg-yellow-500 border-0 py-2 px-14 focus:outline-none hover:bg-red-600 hover:text-slate-100 text-lg font-semibold text-center"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Page;
