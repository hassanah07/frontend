// import React from "react";

// const Sitemap = async () => {
//   const baseUrl = process.env.FRONTEND_LINK;
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/sitemap`,
//     {
//       cache: "no-cache",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }
//   );

//   const data = await response.json();
//   setTimeout(() => {
//     data;
//   }, 1000);
//   const postUrls = Object.keys(data).map((item) => ({
//     url: `${baseUrl}/blog/${data[item].slug}`,
//     lastModified: data[item].updatedAt
//   }));
//   return [
//     { url: baseUrl, lastModified: new Date() },
//     { url: `${baseUrl}/contact`, lastModified: new Date() },
//     { url: `${baseUrl}/login`, lastModified: new Date() },
//     { url: `${baseUrl}/registration`, lastModified: new Date() },
//     { url: `${baseUrl}/resetpassword`, lastModified: new Date() },
//     { url: `${baseUrl}/health`, lastModified: new Date() },
//     { url: `${baseUrl}/education`, lastModified: new Date() },
//     { url: `${baseUrl}/sports`, lastModified: new Date() },
//     { url: `${baseUrl}/career`, lastModified: new Date() },
//     { url: `${baseUrl}/news`, lastModified: new Date() },
//     { url: `${baseUrl}/medicine`, lastModified: new Date() },
//     { url: `${baseUrl}/pricing`, lastModified: new Date() },
//     { url: `${baseUrl}/talk`, lastModified: new Date() },

//     ...postUrls
//   ];
// };

// export default Sitemap;
export default async function sitemap() {
  const baseUrl = process.env.FRONTEND_LINK;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/sitemap`,
    {
      cache: "no-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  const data = await response.json();
  setTimeout(() => {
    data;
  }, 1000);
  const postUrls = Object.keys(data).map((item) => ({
    url: `${baseUrl}/blog/${data[item].slug}`,
    lastModified: data[item].updatedAt
  }));
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/login`, lastModified: new Date() },
    { url: `${baseUrl}/registration`, lastModified: new Date() },
    { url: `${baseUrl}/resetpassword`, lastModified: new Date() },
    { url: `${baseUrl}/health`, lastModified: new Date() },
    { url: `${baseUrl}/education`, lastModified: new Date() },
    { url: `${baseUrl}/sports`, lastModified: new Date() },
    { url: `${baseUrl}/career`, lastModified: new Date() },
    { url: `${baseUrl}/news`, lastModified: new Date() },
    { url: `${baseUrl}/medicine`, lastModified: new Date() },
    { url: `${baseUrl}/pricing`, lastModified: new Date() },
    { url: `${baseUrl}/talk`, lastModified: new Date() },
    ...postUrls
  ];
}
