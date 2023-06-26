import Link from "next/link";
import { GitHub as FGithub, Linkedin, Twitter } from "react-feather";

const SOCIALS = [
  {
    title: "Github",
    href: "https://github.com/pdcolandrea",
    icon: <FGithub />,
  },
  {
    title: "Linkedin",
    href: "https://linkedin.com/pdcolandrea",
    icon: <Linkedin />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/the_neanderpaul",
    icon: <Twitter />,
  },
];

function SocialLinks() {
  return (
    <div className="flex">
      {SOCIALS.map((social) => {
        return (
          <Link
            className="text-2xl duration-300 focus:ring-4 focus:ring-offset-4 dark:ring-offset-black rounded ring-primary outline-none cursor-pointer mr-6 hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300 hover:scale-110"
            href={social.href}
            key={social.href}
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
