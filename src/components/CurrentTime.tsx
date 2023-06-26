"use client";

import { useEffect, useState } from "react";
import { Text } from "./Text";
import { Nullable } from "@/lib/util";

interface Time {
  currently: string;
  awake: boolean;
}

function CurrentTime() {
  const [time, setTime] = useState<Nullable<Time>>(null);

  const updateCurrentTime = () => {
    let current = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });

    setTime({
      currently: `${current.slice(-11, -6)}${current.slice(-3, -1)}.M.`,
      awake: new Date().getHours() < 6 ? false : true,
    });

    setTimeout(updateCurrentTime, 60 * 1000);
  };

  useEffect(() => {
    const second = setInterval(() => updateCurrentTime(), 1000);

    return () => {
      clearInterval(second);
    };
  }, []);

  return (
    <div className="border-l-4 pl-4 opacity-60 max-w-lg border-teal-100 dark:border-teal-900">
      <Text>
        It&apos;s currently <span className="font-bold">{time?.currently}</span>{" "}
        for me, so I&apos;m probably{" "}
        <span className="font-bold">{time?.awake ? "awake" : "sleeping"}</span>.
        I&apos;ll get back to you soon.
      </Text>
    </div>
  );
}

export default CurrentTime;
