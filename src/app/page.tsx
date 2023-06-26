import Avatar from "@/components/Avatar";
import Heading from "@/components/Heading";
import TypingAnimation from "@/components/TypingAnimation";
import LinkTag from "@/components/links/LinkTag";
import { Text } from "@/components/Text";
import SocialLinks from "@/components/links/SocialLinks";
import Link from "next/link";
import { Send as FSend } from "react-feather";

export default function Home() {
  const TEXT_MARGIN_BOTTOM = 1.5;

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
            {" "}
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
      <section className="flex flex-col mb-12">
        <Heading>About 💭</Heading>

        <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
          I'm a a software engineer based in Florida. With a passion for
          software development and a love for TypeScript frameworks, I
          specialize in creating dynamic and robust applications on both mobile
          and web.
        </Text>

        <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
          I specialize in web development using <b>Next.js</b> and mobile app
          development using <b>React Native</b>. With Next.js, I create dynamic
          web experiences, leveraging its seamless integration with React and
          powerful features like <b>server-side rendering</b> and{" "}
          <b>static site generation</b>. For mobile development, I use React
          Native to build native-like apps, sharing code across platforms while
          delivering exceptional performance and user experiences.
        </Text>

        <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
          During my leisure hours, I have an adored{" "}
          <LinkTag href="#">German Shepherd</LinkTag>
          whom I cherish. Engaging in training sessions and companionship with
          my furry friend brings me immense joy, and I continuously strive to
          find novel methods to stimulate and challenge him. The discipline and
          patience essential for dog training align with my mindset when it
          comes to software engineering.
        </Text>

        <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
          I am constantly seeking exciting projects to collaborate on and
          contribute innovative solutions. If you're looking for a dedicated and
          versatile software engineer with expertise in Next.js, TypeScript, and
          a love for German Shepherds, feel free to{" "}
          <LinkTag href="https://pics.notnick.io" target="_blank">
            get in touch!
          </LinkTag>
        </Text>

        <Text>
          If you&apos;re interested on what specs I use on a daily basis then{" "}
          <LinkTag href="/specs">click here</LinkTag>.
        </Text>

        <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
          View the collection of articles that I&apos;ve found interesting{" "}
          <LinkTag href="/articles">over here</LinkTag>.
        </Text>
      </section>
    </>
  );
}
