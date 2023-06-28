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

import { auth } from "@/lib/auth";
import { getGuestbookMessages } from "../actions";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function GuestsHome() {
  let messages;
  let session;
  try {
    const [userResp, guestResp] = await Promise.allSettled([
      auth(),
      getGuestbookMessages(),
    ]);

    if (userResp.status === "fulfilled") {
      session = userResp.value;
    } else {
      console.warn(userResp);
    }

    if (guestResp.status === "fulfilled") {
      messages = guestResp.value;
    } else {
      console.warn(guestResp);
    }
  } catch (err) {
    console.error(err);
  }

  return (
    <>
      <div className="flex flex-col mb-12">
        <Heading>Guest Book📚</Heading>

        {session?.user ? (
          <div>
            <GuestMessageForm />
            <SignoutButton />
          </div>
        ) : (
          <SigninGithub />
        )}

        <div className="mt-12">
          {messages?.map((msg, index) => {
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
