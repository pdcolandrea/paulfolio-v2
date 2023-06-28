"use server";

import { auth } from "@/lib/auth";

const TEST_DELAY = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const saveGuestbookMessage = async (data: FormData) => {
  // auth
};

export const getGuestbookMessages = async () => {
  await TEST_DELAY(3000);
  return [
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
};

export const getSession = async () => {
  const session = await auth();
  if (!session || !session.user) throw new Error("Unauthorized to access");

  return session;
};
