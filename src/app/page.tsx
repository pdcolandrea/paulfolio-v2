import Avatar from "@/components/Avatar";
import Heading from "@/components/Heading";
import TypingAnimation from "@/components/TypingAnimation";
import SocialLinks from "@/components/links/SocialLinks";
import Link from "next/link";
import { Send as FSend } from "react-feather";
import AboutMe from "@/components/about";

export default function Home() {
  return (
    <>
      <div className="flex md:flex-row md:flex-start flex-col-reverse items-start md:items-center w-full justify-between mb-12 mt-20">
        <div className="flex flex-col">
          <Link
            href="https://google.com"
            className="w-fit focus:ring-4 rounded-full focus:ring-offset-2 dark:ring-offset-black border-none my-2 ring-accent duration-300 outline-none font-semibold"
          >
            <div className="flex items-center p-1 text-sm px-3 w-fit rounded-full text-white bg-accent">
              <FSend className="mr-2" size={15} />
              Sarasota, FL
            </div>
          </Link>

          <Heading>
            Hi, I&apos;m Paul! <span className="wave">👋</span>
          </Heading>

          <div className="text-gray-700 flex font-semibold dark:text-gray-100 mb-4">
            {new Date().getFullYear() - 1998} y/o&nbsp;
            <TypingAnimation words={["Software Engineer", "iOS Engineer"]} />
          </div>

          <SocialLinks />
        </div>

        <div className="flex mb-8 md:mb-0 duration-300 rounded-full">
          <Avatar width={122} height={122} border />
        </div>
      </div>

      <AboutMe />
    </>
  );
}
