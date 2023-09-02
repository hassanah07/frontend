"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Navigation from "../../components/AdminNav";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const Page = () => {
  // const [profileData, setProfileData] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [performed, setPerformed] = useState([]);

  const toastOption = {
    theme: "dark",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  // const logResult = async () => {
  //   let logResponse = await fetch(
  //     `${process.env.NEXT_PUBLIC_HOST}/api/auth/getuserdata`,
  //     {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "content-type": "application/json",
  //         "auth-token": localStorage.getItem("token"),
  //       },
  //       body: JSON.stringify(),
  //     }
  //   );
  //   const data = await logResponse.json();
  //   toast.error("Please Try After Sometime", toastOption);
  //   // setProfileData(data);
  // };

  const fetchData = async () => {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/postsperformnot`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await res.json();
    setBlogData(data.length);
  };

  const fetchDataPerform = async () => {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/postsperform`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await res.json();
    setPerformed(data.length);
  };
  useEffect(() => {
    // logResult();
    fetchDataPerform();
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div
          className="flex bg-gray-100 dark:bg-slate-700 min-h-screen"
          x-data="{panel:false, menu:true}"
        >
          <div className="flex-grow text-gray-800 dark:text-slate-100">
            <div className="p-6 sm:p-10 space-y-6">
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* total reaches */}
                <div className="flex items-center p-8 bg-white dark:bg-black shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 dark:text-black bg-blue-100 dark:bg-blue-400 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">00</span>
                    <span className="block text-gray-500 dark:text-white">
                      Total Reaches
                    </span>
                  </div>
                </div>
                {/* average income */}
                <div className="flex items-center p-8 bg-white dark:bg-black shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 dark:text-black bg-green-100 dark:bg-blue-400 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">₹. 00.00</span>
                    <span className="block text-gray-500 dark:text-white">
                      Average Income
                    </span>
                  </div>
                </div>
                {/* under performing posts */}
                <div className="flex items-center p-8 bg-white dark:bg-black shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 dark:text-black bg-red-100 dark:bg-blue-400 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                      />
                    </svg>
                  </div>
                  <div>
                    {/* <span className="inline-block text-2xl font-bold">9</span> */}
                    <span className="inline-block text-xl text-gray-500 dark:text-white font-semibold">
                      {blogData}
                    </span>
                    <span className="block text-gray-500 dark:text-white">
                      Underperforming Posts
                    </span>
                  </div>
                </div>
                {/* published posts */}
                <div className="flex items-center p-8 bg-white dark:bg-black shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 dark:text-black bg-blue-100 dark:bg-blue-400 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">
                      {performed}
                    </span>
                    <span className="block text-gray-500 dark:text-white">
                      Published Posts
                    </span>
                  </div>
                </div>
              </div>
              {/* revenue generated */}
              <div className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6 h-full relative">
                <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white dark:bg-black shadow rounded-lg">
                  <div className="px-6 py-5 font-semibold border-b border-gray-100">
                    Revenue Generated
                  </div>
                  <div className="p-4 flex-grow">
                    <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                      <Doughnut data={data} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white dark:bg-black shadow rounded-lg">
                  <div className="px-6 py-5 font-semibold border-b border-gray-100">
                    Approved Posts
                  </div>
                  <div className="p-4 flex-grow">
                    <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                      <Pie data={data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </>
  );
};

export default Page;
