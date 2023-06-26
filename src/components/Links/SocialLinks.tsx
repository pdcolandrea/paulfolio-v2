import Link from "next/link";
import { GitHub as FGithub } from "react-feather";

const SOCIALS = [
  {
    id: 1,
    title: "Github",
    href: "https://github.com/pdcolandrea",
    icon: <FGithub />,
  },
];

function SocialLinks() {
  return (
    <div className="flex">
      {SOCIALS.map((social) => {
        return (
          <Link
            className="text-2xl duration-300 focus:ring-4 focus:ring-offset-4 dark:ring-offset-black rounded ring-accent outline-none cursor-pointer mr-6 hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300 hover:scale-110"
            href={social.href}
            key={social.id}
            title={social.title}
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default SocialLinks;
