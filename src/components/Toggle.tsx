"use client";

import { Nullable } from "@/lib/util";
import { useCallback, useState } from "react";
import { Sun as FSun, Moon as FMoon } from "react-feather";

function Toggle() {
  const [theme, setTheme] = useState<Nullable<string>>(null);

  const onToggleClicked = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    newTheme === "light"
      ? document.querySelector("html")?.classList.remove("dark")
      : document.querySelector("html")?.classList.add("dark");
  };

  return (
    <div
      title={theme === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode"}
      onClick={onToggleClicked}
      className="flex items-center justify-center focus:ring-4 ring-primary outline-none bg-gray-100 text-black h-9 w-9 duration-300 hover:bg-gray-200 hover:translate-y-1rounded-lg ml-auto dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white rounded-lg focus:ring-offset-2 dark:ring-offset-black"
    >
      {theme === "dark" ? <FSun /> : <FMoon />}
    </div>
  );
}

export default Toggle;
