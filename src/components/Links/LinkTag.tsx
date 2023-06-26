import Link from "next/link";

interface LinkTagProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
  target?: "_blank" | (string & {});
}

function LinkTag({ href, className, children }: LinkTagProps) {
  return (
    <Link
      href={href}
      className={`font-bold focus:ring-offset-2 dark:ring-offset-black rounded inline-flex items-center w-fit text-primary hover:underline focus:ring-4 ring-primary outline-none duration-30 ${className}`}
    >
      {children}
    </Link>
  );
}

export default LinkTag;
