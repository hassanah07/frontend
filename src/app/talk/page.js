"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [contactId, setContactId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [desc, setDesc] = useState("");
  // const [yourTime, setYourTime] = useState("");
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "mobile") {
      const limit = 10;
      setMobile(e.target.value.slice(0, limit));
      setContactId(Math.floor(Math.random() * 99101111111));
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  };
  const toastOptions = {
    theme: "dark",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { contactId, name, email, mobile, desc };
    // console.log({ data, msg: "success" });
    let sendData = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/contact/callreq`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    sendData = await sendData.json();
    toast.success(sendData, toastOptions);
    console.log(sendData);
  };
  return (
    <>
      <div className="text-gray-600 body-font bg-green-100 dark:bg-slate-800 flex items-center justify-center min-h-screen">
        <ToastContainer />
        <section className="text-gray-600 body-font relative md:w-[50%] pb-20">
          <div className="container px-5 mx-auto md:bg-green-300 rounded-xl shadow-2xl pb-10">
            <h2 className="sm:text-3xl text-lg title-font my-4 text-center text-slate-600 font-semibold pt-5">
              Place A call Request
            </h2>
            <small className="text-red-600">
              Please Fill the bellow information carefully, We will assign a
              Programmer on your demand on respect of your needs. And the Assign
              Programmer Will Call you at your Free Time.
            </small>
            <hr />
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      autoComplete="off"
                      autoSave="off"
                      aria-autocomplete="none"
                      maxLength={20}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="email"
                      className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      autoComplete="off"
                      autoSave="off"
                      aria-autocomplete="none"
                      maxLength={50}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="desc"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Description
                    </label>
                    <textarea
                      name="desc"
                      id="desc"
                      cols="15"
                      rows="5"
                      value={desc}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Please Specify About Your Project"
                      maxLength={250}
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="desc"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Mobile Number
                    </label>

                    <input
                      type="number"
                      id="mobile"
                      name="mobile"
                      value={mobile}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      maxLength={10}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="calling"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Calling Time
                    </label>
                    <input
                      type="text"
                      id="calling"
                      name="calling"
                      defaultValue="Response Within 24 hours"
                      className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      autoComplete="off"
                      autoSave="off"
                      aria-autocomplete="none"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    className="flex ml-0 text-black bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 hover:text-slate-100 text-lg w-full justify-center font-semibold"
                    onClick={handleSubmit}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
