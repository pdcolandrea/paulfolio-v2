"use client";

import { signIn, signOut } from "next-auth/react";
import { GitHub as FGitHub, ArrowLeft as FArrowLeft } from "react-feather";

export const SigninGithub = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button onClick={() => signIn()} {...props}>
      <span className="flex flex-row justify-center items-center bg-black border border-white font-semibold w-fit px-4 py-2 rounded-lg">
        <FGitHub className="mr-4" />
        Sign in with Github
      </span>
    </button>
  );
};

export const SignoutButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className="flex-row flex text-xs mt-2 hover:border-b duration-150 animate-in border-primary w-fit"
      {...props}
    >
      <FArrowLeft size={14} />
      <p>Sign Out</p>
    </button>
  );
};
