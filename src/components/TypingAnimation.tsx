"use client";

import { TypeAnimation as TAnimation } from "react-type-animation";

type Sequence = Array<string | number>;
interface TypingAnimationProps {
  words: string[];
  repeat?: number;
}

function TypeAnimation({ words, repeat }: TypingAnimationProps) {
  const sequence: Sequence = [];
  words.forEach((w) => {
    sequence.push(w);
    sequence.push(2000);
  });

  return (
    <TAnimation
      sequence={sequence}
      wrapper="p"
      cursor={true}
      repeat={repeat ? repeat : Infinity}
    />
  );
}

export default TypeAnimation;
