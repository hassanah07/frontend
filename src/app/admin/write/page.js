"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Page = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [userId, setUserid] = useState("");
  const [randNumber, setRandNumber] = useState();
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [profileStatus, setProfileStatus] = useState(false);
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
    theme: "colored",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  };
  const router = useRouter();
  const [profileData, setProfileData] = useState("");
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
    setProfileData(data);
    setUserid(data._id);
    setAuthor(data.name);
    setProfileStatus(data.status);
  };
  useEffect(() => {
    const blogId = Math.floor(
      Math.random(10000000, 99999999) * 100000000000000000
    );
    setRandNumber(blogId);
    logResult();
  }, []);
  const handleChange = (e) => {
    if (e.target.name == "slug") {
      setSlug(e.target.value);
    } else if (e.target.name == "title") {
      setTitle(e.target.value);
    } else if (e.target.name == "category") {
      setCategory(e.target.value);
    } else if (e.target.name == "desc") {
      setShortDesc(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = {
      content,
      author,
      userId,
      blogId: randNumber,
      slug,
      category,
      desc: shortDesc
    };
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/write`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(blogData)
      }
    );
    res = await res.json();
    if (res.status == true) {
      toast.success(res.msg, toastOption);
    } else {
      toast.error(res.msg, toastOption);
    }
  };

  return (
    <>
      {profileStatus == false && (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <h1 className="font-semibold text-white">
            You Do not have Access to Write A blog
          </h1>
        </div>
      )}
      {profileStatus == true && (
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
                value={author}
                type="text"
                name="author"
                id="author"
                placeholder="author name"
                onChange={handleChange}
                className="py-2 w-full text-slate-500"
                required
              />
            </div>
            <div className="w-1/2 py-2 px-2">
              <input
                value={randNumber}
                type="text"
                name="userid"
                id="userid"
                placeholder="author user id"
                className="py-2 w-full text-slate-500"
                hidden
                required
              />
              <select
                name="category"
                id="category"
                required
                className="py-2 w-full text-slate-500"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select Category
                </option>
                <option value="career">Career</option>
                <option value="news">News</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
                <option value="sports">Sports</option>
                <option value="medicine">Drugs</option>
              </select>
              {/* <input
            value={randNumber}
            type="text"
            name="userid"
            id="userid"
            placeholder="author user id"
            className="py-2 w-full text-slate-500"
          /> */}
            </div>
          </div>
          <div className="w-full flex flex-wrap p-2">
            <div className="w-1/2 py-2 px-2">
              <input
                value={title}
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
                value={slug}
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
              Post Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
