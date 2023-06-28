"use client";

import { useRef } from "react";
import { Input } from "../ui/input";

function GuestMessageForm() {
  const formEl = useRef<HTMLFormElement>(null);

  return (
    <form
      className="flex flex-row relative items-center"
      ref={formEl}
      action={async (formData) => {
        // await addToDB()
        formEl.current?.reset();
      }}
    >
      <Input placeholder="Your message..." className="focus:outline-none" />
      <button className="bg-primary-foreground absolute right-1 top-1 items-center justify-center px-4 py-1 h-8 rounded">
        <span className="text-xs">Post</span>
      </button>
    </form>
  );
}

export default GuestMessageForm;
