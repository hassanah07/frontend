import Link from "next/link";
import Hero from "./components/Hero";
import Strip from "./components/Strip";

export const metadata = {
  title: "Home",
};

const Page = async () => {
  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  );
};

export default Page;
