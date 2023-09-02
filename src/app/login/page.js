"use client";
import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Page = () => {
  // const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      redirect("/admin/dashboard");
      // router.refresh();
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
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
    const data = { email, password };
    try {
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      res = await res.json();
      if (res.token) {
        localStorage.setItem("token", res.token);
        toast.success("Yup! Logged In", toastOptions);
        location.reload();
        redirect("/admin/dashboard");
      } else {
        toast.error(res.msg, toastOptions);
      }
    } catch (error) {
      toast.error(error, toastOptions);
    }
  };
  return (
    <div className="text-gray-600 body-font bg-green-100 dark:bg-slate-800 flex items-center justify-center min-h-screen">
      <ToastContainer />
      <section className="text-gray-600 body-font relative md:w-[70%]">
        <div className="container px-5 mx-auto md:bg-green-300 md:w-[50%] rounded-xl shadow-2xl">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font my-4 text-gray-900 dark:text-slate-100">
              Login Now
            </h1>
          </div>
          <hr />
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="username"
                    className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    autoComplete="off"
                    autoSave="off"
                    aria-autocomplete="none"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="password"
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
                  Login
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <small className="text-red-700 font-semibold capitalize">
                  Never Share Your credentials with anyone
                </small>
                <p className="leading-normal my-5">
                  <b className="text-blue-600 hover:animate-pulse">
                    <Link href="/registration">Click Here for Sign Up</Link>
                  </b>
                  <br />
                  <b className="text-red-600 hover:animate-pulse">
                    <Link href="/resetpassword">
                      Forget Password? Reset Now
                    </Link>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
