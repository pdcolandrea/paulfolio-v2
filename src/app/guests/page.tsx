"use client";

import Heading from "@/components/Heading";
import { SigninGithub, SignoutButton } from "@/components/guests/buttons";
import GuestMessageForm from "@/components/guests/GuestMessageForm";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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

export default async function GuestsHome() {
  let signedIn = false;

  return (
    <>
      <div className="flex flex-col mb-12">
        <Heading>Guest Book📚</Heading>

        {signedIn ? (
          <div>
            <GuestMessageForm />
            <SignoutButton />
          </div>
        ) : (
          <SigninGithub />
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

      {/* <Sheet open={false}>
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
      </Sheet> */}
    </>
  );
}
