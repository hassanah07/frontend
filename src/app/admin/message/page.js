"use client";
import Navigation from "../../components/AdminNav";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const Page = () => {
  // const router = useRouter();
  const [profileData, setProfileData] = useState("");
  useEffect(() => {
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
    const logResult = async () => {
      let logResponse = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/auth/getuserdata`,
        {
          cache: "no-cache",
          method: "POST", // or 'PUT'
          headers: {
            "content-type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(),
        }
      );
      const data = await logResponse.json();
      setProfileData(data);
      toast.error("Please Try After Sometime", toastOption);
    };
    const token = localStorage.getItem("token");
    if (!token) {
      redirect("/login");
    }
  }, []);

  return (
    <>
      {/* <Navigation /> */}
      <h1>message</h1>
    </>
  );
};

export default Page;
