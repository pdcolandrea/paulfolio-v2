"use client";

import { about } from "@/content/about";
import Heading from "./Heading";
import ImagePreview from "./ImagePreview";
import { useState } from "react";

function AboutMe() {
  const [showImgPreview, setShowImgPrewview] = useState(false);
  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>

      {about.map((content) => {
        return (
          <span
            onMouseEnter={() => setShowImgPrewview(true)}
            onMouseLeave={() => setShowImgPrewview(false)}
            key={content.id}
          >
            {content.text}
          </span>
        );
      })}
    </section>
  );
}

export default AboutMe;
