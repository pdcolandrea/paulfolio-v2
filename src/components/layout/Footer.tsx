import Link from "next/link";

function Footer() {
  return (
    <footer className="flex items-center justify-between pb-12 border-t mt-6 border-teal-100 dark:border-teal-900 pt-10">
      <div className="flex flex-col">
        <h2 className="text-xl opacity-40 font-bold dark:text-white">
          Paul Colandrea
        </h2>
        <p className="text-gray-500 opacity-50 text-xs">
          &copy; {new Date().getFullYear()} | All rights reserved
        </p>
        <div className="flex items-center text-xs opacity-30 text-gray-500">
          <p>Built with ❤️ by</p>
          <FooterLink link="">Paul Colandrea</FooterLink>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      className="ml-1 hover:underline dark:hover:text-primary hover:text-black focus:ring-4 dark:ring-offset-black opacity-100 ring-primary focus:ring-offset-2 outline-none rounded border-none duration-300"
      href={link}
      target="_blank"
    >
      <b>{children}</b>
    </Link>
  );
};

export default Footer;
