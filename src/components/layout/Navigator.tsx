"use client";

import Dropdown from "../Dropdown";
import Toggle from "../Toggle";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, text: "/", href: "/" },
  { id: 2, text: "projects", href: "/projects" },
  { id: 3, text: "blog", href: "/blog" },
  { id: 4, text: "guest book", href: "/guests" },
];

// TODO: can use middleware to remove client directive
function Navigator() {
  const path = usePathname();

  return (
    <nav className="flex px-6 top-8 fixed border dark:bg-[#10161a]/50 z-10 w-[90%] md:w-[40rem] border-teal-100 dark:border-teal-900 backdrop-blur-md mb-12 rounded-lg justify-between h-14 items-center">
      <div className="flex lg:hidden">
        <Dropdown items={navLinks} />
      </div>
      <div className="hidden lg:flex">
        {navLinks.map((link) => {
          return (
            <a
              key={link.id}
              href={link.href}
              className={`mr-8 text-gray-600 focus:ring-offset-2 dark:ring-offset-black focus:ring-4 ring-primary outline-none dark:text-gray-300 text-sm duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg ${
                path.includes(link.href) && "dark:bg-gray-800 bg-gray-100"
              }`}
            >
              {link.text}
            </a>
          );
        })}
      </div>

      <Toggle />
    </nav>
  );
}

export default Navigator;
