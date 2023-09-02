import Quicklink from "../components/Quicklink";
import BlogCombine from "../components/BlogCombine";

export const metadata = {
  title: "Sports",
  description:
    "Welcome to Guide Wale, Your Path to Success in Sports. Dive into our insightful sports blog, dedicated to guiding you towards a rewarding career in the sports industry. From in-depth profiles of successful sports professionals to expert tips on landing your dream job, we cover every aspect of your journey. Explore strategies for sports management, coaching, marketing, and more, all backed by real-world experiences and advice. Whether you are a passionate enthusiast or a budding professional, our concise and engaging posts will equip you with the knowledge and inspiration to excel in the dynamic world of sports careers.",
};
const Page = async ({ searchParams }) => {
  const dataLimit = 6;

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }
  // console.log(currentPage);
  // let offset = (currentPage - 1) * dataLimit;
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/sports?currentpage=${currentPage}&datalimit=${dataLimit}`;
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
  const nameTwo = "Sports";
  const linkTwo = `${process.env.FRONTEND_LINK}/sports`;
  const nameThree = null;
  const linkThree = null;
  const myPage = "sports";
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
