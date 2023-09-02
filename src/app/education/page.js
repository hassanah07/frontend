import Quicklink from "../components/Quicklink";
import BlogCombine from "../components/BlogCombine";

export const metadata = {
  title: "Education & Colleges",
  description:
    "Welcome to guide Wale, Your Path to Educational Excellence. Explore our insightful education blog, dedicated to providing valuable resources for your academic journey. From study tips and career insights to educational technology trends, our concise posts empower you to make informed decisions. Join us in shaping a successful learning experience and achieving your academic and career aspirations.",
};

const Page = async ({ searchParams }) => {
  const dataLimit = 6;

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }
  // console.log(currentPage);
  // let offset = (currentPage - 1) * dataLimit;
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/education?currentpage=$
  {currentPage}&datalimit=${dataLimit}`;
  const response = await fetch(url, {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const blogs = data.blogposts;
  const totalData = data.totalItems;
  const totalPages = Math.ceil(totalData / dataLimit);
  let pageNumbers = [];
  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pageNumbers.push(i);
  }
  const nameOne = "Home";
  const linkOne = process.env.FRONTEND_LINK;
  const nameTwo = "Education";
  const linkTwo = `${process.env.FRONTEND_LINK}/education`;
  const nameThree = null;
  const linkThree = null;
  const myPage = "education";
  return (
    <>
      <Quicklink
        linkOne={linkOne}
        linkTwo={linkTwo}
        linkThree={linkThree}
        nameOne={nameOne}
        nameTwo={nameTwo}
        nameThree={nameThree}
      />
      <BlogCombine blogs={blogs} pageNumbers={pageNumbers} myPage={myPage} />
    </>
  );
};

export default Page;
