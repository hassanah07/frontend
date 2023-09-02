import Quicklink from "../components/Quicklink";
import BlogCombine from "../components/BlogCombine";

export const metadata = {
  title: "Jobs and Career",
  description:
    "Welcome to Guide Wale Jobs: Your Gateway to Professional Opportunities. Explore our jobs-related blog, offering invaluable insights into job search strategies, resume building, interview preparation, and more. Our concise posts provide a roadmap for navigating the competitive job market, ensuring you are equipped with the tools to secure your dream career. Join us in unlocking your potential and achieving career success.",
};

const Page = async ({ searchParams }) => {
  const dataLimit = 6;

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }
  // console.log(currentPage);
  // let offset = (currentPage - 1) * dataLimit;
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/view?currentpage=${currentPage}&datalimit=${dataLimit}`;
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
  const nameTwo = "Jobs & Career";
  const linkTwo = `${process.env.FRONTEND_LINK}/career`;
  const nameThree = null;
  const linkThree = null;
  const myPage = "career";
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
