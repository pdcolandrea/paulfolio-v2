import Link from "next/link";
import LinkTag from "../links/LinkTag";

const navLinks = [{ id: 1, text: "/", href: "/", dropdown: "Home" }];

function Navigator() {
  return (
    <nav className="flex px-6 top-8 fixed border dark:bg-[#10161a]/50 z-10 w-[90%] md:w-[40rem] border-teal-100 dark:border-teal-900 backdrop-blur-md mb-12 rounded-lg justify-between h-14 items-center">
      <div className="flex lg:hidden">{/* <Dropdown /> */}</div>
      <div className="hidden lg:flex">
        {navLinks.map((link) => {
          return (
            <LinkTag key={link.id} href={link.href}>
              {link.text}
            </LinkTag>
          );
        })}
      </div>

      <span>TOGGLE</span>
    </nav>
  );
}

export default Navigator;
