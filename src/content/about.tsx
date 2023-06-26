import { Text } from "@/components/Text";
import LinkTag from "@/components/links/LinkTag";

const TEXT_MARGIN_BOTTOM = 1.5;
export const about = [
  {
    id: 1,
    text: (
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&#39;m a a software engineer based in Florida. With a passion for
        software development and a love for TypeScript frameworks, I specialize
        in creating dynamic and robust applications on both mobile and web.
      </Text>
    ),
  },
  {
    id: 2,
    text: (
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I specialize in web development using <b>Next.js</b> and mobile app
        development using <b>React Native</b>. With Next.js, I create dynamic
        web experiences, leveraging its seamless integration with React and
        powerful features like <b>server-side rendering</b> and{" "}
        <b>static site generation</b>. For mobile development, I use React
        Native to build native-like apps, sharing code across platforms while
        delivering exceptional performance and user experiences.
      </Text>
    ),
  },
  {
    id: 3,
    text: (
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        During my leisure hours, I have an adored{" "}
        <LinkTag href="#">German Shepherd</LinkTag> whom I cherish. Engaging in
        training sessions and companionship with my furry friend brings me
        immense joy, and I continuously strive to find novel methods to
        stimulate and challenge him. The discipline and patience essential for
        dog training align with my mindset when it comes to software
        engineering.
      </Text>
    ),
  },
  {
    id: 4,
    text: (
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I am constantly seeking exciting projects to collaborate on and
        contribute innovative solutions. If you&#39;re looking for a dedicated
        and versatile software engineer with expertise in Next.js, TypeScript,
        and a love for German Shepherds, feel free to{" "}
        <LinkTag href="#" target="_blank">
          get in touch!
        </LinkTag>
      </Text>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <Text>
          If you&apos;re interested on what specs I use on a daily basis then{" "}
          <LinkTag href="/specs">click here</LinkTag>.
        </Text>

        <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
          View the collection of articles that I&apos;ve found interesting{" "}
          <LinkTag href="/blog">over here</LinkTag>.
        </Text>
      </>
    ),
  },
];
