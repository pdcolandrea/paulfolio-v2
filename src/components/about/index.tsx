import { about } from "@/content/about";
import Heading from "../Heading";

function AboutMe() {
  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>

      {about.map(({ text }) => {
        return text;
      })}
    </section>
  );
}

export default AboutMe;
