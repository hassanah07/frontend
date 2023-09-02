import Quicklink from "../components/Quicklink";
import BlogCombine from "../components/BlogCombine";

export const metadata = {
  title: "Health",
  description:
    "Welcome to Guide Wale Navigating Health Professions. Embark on a journey of wellness with our enlightening health blog. Discover comprehensive insights into diverse health careers, from nursing and medical research to holistic practices. Explore expert advice on educational paths, skill development, and industry trends, empowering you to make informed career choices. Whether you are a medical aspirant or transitioning into the health sector, our concise posts offer valuable guidance. With real-life stories and practical tips, we're your compass for navigating the vast terrain of health professions. Let us be your partner in sculpting a successful and fulfilling career in the world of health.",
};

const Page = async ({ searchParams }) => {
  const dataLimit = 6;

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }
  // console.log(currentPage);
  // let offset = (currentPage - 1) * dataLimit;
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/health?currentpage=${currentPage}&datalimit=${dataLimit}`;
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
  const nameTwo = "Health & Daily Life";
  const linkTwo = `${process.env.FRONTEND_LINK}/health`;
  const nameThree = null;
  const linkThree = null;
  const myPage = "health";
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
