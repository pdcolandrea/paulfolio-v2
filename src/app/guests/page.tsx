"use client";

import Earth from "@/components/Globe";
import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { ArrowLeft, GitHub as FGitHub } from "react-feather";

const FAKE_DATA = [
  {
    author: "@pdcolandrea",
    message: "Hello there!",
  },
  {
    author: "@pdcolandrea",
    message: "How are you!",
  },
  {
    author: "@pdcolandrea",
    message: "Cooo000000000llsds00ll site!",
  },
  {
    author: "@pdcolandrea",
    message: "wow!",
  },
];

export default function GuestsHome() {
  const [signedIn, setSignedin] = useState(true);
  const [messageReady, setMessageReady] = useState(false);

  return (
    <>
      <div className="flex flex-col mb-12 mt-20">
        <Heading>Guest Book📚</Heading>

        {signedIn ? (
          <div>
            <div className="flex flex-row relative items-center">
              <Input
                placeholder="Your message..."
                className="focus:outline-none"
              />
              <button className="bg-primary-foreground absolute right-1 top-1 items-center justify-center px-4 py-1 h-8 rounded">
                <span className="text-xs">Post</span>
              </button>
            </div>

            <span className="flex-row flex text-xs mt-2 hover:border-b duration-150 animate-in border-primary w-fit">
              <ArrowLeft size={14} />
              <p>Sign Out</p>
            </span>
          </div>
        ) : (
          <button>
            <span className="flex flex-row justify-center items-center bg-black border border-white font-semibold w-fit px-4 py-2 rounded-lg">
              <FGitHub className="mr-4" />
              Sign in with Github
            </span>
          </button>
        )}

        <div className="mt-12">
          {FAKE_DATA.map((msg, index) => {
            return (
              <div
                key={`${msg}${index}`}
                className="text-sm break-words w-full mb-2"
              >
                <span className="dark:text-[#9e9e9e] text-neutral-900">
                  {msg.author}
                  {": "}
                </span>
                {msg.message}
              </div>
            );
          })}
        </div>
      </div>

      <Sheet open={messageReady}>
        <SheetContent side="bottom" className="flex-row flex">
          <SheetHeader>
            <SheetTitle>Care to share your location?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>

          <Earth />
        </SheetContent>
      </Sheet>
    </>
  );
}
