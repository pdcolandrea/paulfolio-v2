import Link from "next/link";

interface LinkTagProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

function LinkTag({ href, className, children }: LinkTagProps) {
  return (
    <Link
      href={href}
      className={`mr-8 text-gray-600 focus:ring-offset-2 dark:ring-offset-black focus: ring-4 ring-[#f54bff] outline-none dark:text-gray-300 text-sm duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg ${className}`}
    >
      {children}
    </Link>
  );
}

export default LinkTag;
