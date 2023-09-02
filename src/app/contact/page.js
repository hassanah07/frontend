"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    contactId: Math.floor(Math.random() * 1000000000000),
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
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
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/contact/newcontact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const res = await resp.json();
      if (res.msg === true) {
        toast.success("Your Message is sent to Admin", toastOptions);
      } else {
        toast.error("Message Already Sent To Admin", toastOptions);
      }
    } catch (err) {
      toast.error("Please Try After sometime", toastOptions);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="text-gray-600 body-font pb-14 bg-green-100 dark:bg-slate-800 min-h-screen">
        <section className="body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-slate-100">
                Contact Us
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600 dark:text-slate-100"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      placeholder="your name"
                      className="w-full bg-gray-100 bg-opacity-30 border border-gray-300 focus:border-none focus:bg-slate-500 focus:ring-2 focus:ring-transparent text-base outline-none text-gray-700 dark:text-yellow-400 font-semibold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600 dark:text-slate-100"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="your email"
                      className="w-full bg-gray-100 bg-opacity-30 border border-gray-300 focus:border-none focus:bg-slate-500 focus:ring-2 focus:ring-transparent text-base outline-none text-gray-700 dark:text-yellow-400 font-semibold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600 dark:text-slate-100"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={data.message}
                      onChange={handleChange}
                      placeholder="Please Specify Your Complaint/Service Related Issue"
                      className="w-full bg-gray-100 bg-opacity-30 rounded border border-gray-300 focus:border-none focus:bg-slate-400 focus:ring-2 focus:ring-transparent h-32 text-base outline-none text-gray-700 dark:text-yellow-400 font-semibold py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-1/2 hidden">
                  <div className="relative">
                    <label
                      htmlFor="ContactId"
                      className="leading-7 text-sm text-gray-600 dark:text-slate-100"
                    >
                      Contact Id
                    </label>
                    <input
                      type="contactId"
                      id="contactId"
                      name="contactId"
                      value={data.contactId}
                      onChange={handleChange}
                      placeholder="your email"
                      className="w-full bg-gray-100 bg-opacity-30 border border-gray-300 focus:border-none focus:bg-slate-400 focus:ring-2 focus:ring-transparent text-base outline-none text-gray-700 dark:text-yellow-400 font-semibold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    className="flex ml-0 text-slate-100 bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 hover:text-slate-100 text-lg font-semibold"
                    onClick={handleSubmit}
                  >
                    Send Message
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-pink-500">We will surely hear you</a>
                  <p className="leading-normal my-5">
                    <small className="text-red-600 font-semibold capitalize">
                      due to heavy message
                      <br />
                      reply may take a while long
                      <br />
                      Please Keep Checking Your Email
                    </small>
                  </p>
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
