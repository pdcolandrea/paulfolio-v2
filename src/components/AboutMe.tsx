import { about } from "@/content/about";
import Heading from "./Heading";

function AboutMe() {
  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>

      {about.map((content) => {
        return <span key={content.id}>{content.text}</span>;
      })}
    </section>
  );
}

export default AboutMe;
