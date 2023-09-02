import React from 'react'
import { BsFillHeartPulseFill } from "react-icons/bs";
import { MdVerified, MdVerifiedUser } from "react-icons/md";
import { HiClock } from "react-icons/hi";
import { RiSeoFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";


const HeroTrusted = () => {
  return (
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transition-all hover:bg-purple-100 hover:border-purple-300 dark:text-slate-100 dark:hover:bg-purple-900">
          <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-transparent-500 mb-4">
            <MdVerifiedUser className="font-bold text-5xl text-indigo-700 dark:text-pink-700" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 dark:text-slate-300">
            Security
          </h2>
          <p className="leading-relaxed text-base text-justify capitalize">
            Security is our first priority. We will provide you a secure,
            trusted Web Application. Which will give you a tension free
            experience
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transition-all hover:bg-purple-100 hover:border-purple-300 dark:text-slate-100 dark:hover:bg-purple-900">
          <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-transparent-500 mb-4">
            <HiClock className="font-bold text-5xl text-indigo-700 dark:text-pink-700" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 dark:text-slate-300">
            Fast Delivery
          </h2>
          <p className="leading-relaxed text-base text-justify">
            As we are a Team of Developers, We will provide you a very fast
            delivery of your project. Our Developers works hard to deliver your
            project faster
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transition-all hover:bg-purple-100 hover:border-purple-300 dark:text-slate-100 dark:hover:bg-purple-900">
          <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-transparent-500 mb-4">
            <MdVerified className="font-bold text-5xl text-indigo-700 dark:text-pink-700" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 dark:text-slate-300">
            Talk With Verified Developers
          </h2>
          <p className="leading-relaxed text-base text-justify">
            To fullfil your needs, we will assign a senior developer and you can
            talk with him directly without having any middleman involved.
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transition-all hover:bg-purple-100 hover:border-purple-300 dark:text-slate-100 dark:hover:bg-purple-900">
          <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-transparent-500 mb-4">
            <RiSeoFill className="font-bold text-5xl text-indigo-700 dark:text-pink-700" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 dark:text-slate-300">
            100% SEO Friendly
          </h2>
          <p className="leading-relaxed text-base text-justify">
            We will give you a 100% SEO friendly Web Application. Which will
            help you to list your web applications on top of google search
            results among others Websites
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transition-all hover:bg-purple-100 hover:border-purple-300 dark:text-slate-100 dark:hover:bg-purple-900">
          <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-transparent-500 mb-4">
            <BsFillHeartPulseFill className="font-bold text-5xl text-indigo-700 dark:text-pink-700" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 dark:text-slate-300">
            Trusted By Millions of Heart
          </h2>
          <p className="leading-relaxed text-base text-justify">
            We, as a team, worked with many businesses and their startup
            programs to help them quality software experience
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transition-all hover:bg-purple-100 hover:border-purple-300 dark:text-slate-100 dark:hover:bg-purple-900">
          <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-transparent-500 mb-4">
            <FaHandshake className="font-bold text-5xl text-indigo-700 dark:text-pink-700" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 dark:text-slate-300">
            We Are Always With You
          </h2>
          <p className="leading-relaxed text-base text-justify">
            On every Work we deliver, comes with Three Free Service. And you can
            extend this serves period long as much as your need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroTrusted