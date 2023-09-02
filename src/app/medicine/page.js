import Quicklink from "../components/Quicklink";
import BlogCombine from "../components/BlogCombine";

export const metadata = {
  title: "Drugs And Medications",
  description:
    "Welcome to Guide Wale News Stay Informed, Stay Ahead. Delve into our news blog, your source for timely updates on industry trends, job markets, and career development. Our concise posts offer a fresh perspective on the ever-evolving world of professions. Stay ahead in your career journey with our insightful content, designed to inform and inspire your path to success.",
};

const Page = async ({ searchParams }) => {
  const dataLimit = 6;

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }
  // console.log(currentPage);
  // let offset = (currentPage - 1) * dataLimit;
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/medicine?currentpage=${currentPage}&datalimit=${dataLimit}`;
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
  const nameTwo = "Drugs And Medications";
  const linkTwo = `${process.env.FRONTEND_LINK}/medicine`;
  const nameThree = null;
  const linkThree = null;
  const myPage = "medicine";
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
