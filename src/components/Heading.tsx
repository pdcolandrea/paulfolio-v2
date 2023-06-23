interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

function Heading({ className, children }: HeadingProps) {
  return (
    <h1 className={`text-4xl font-bold mb-6 dark:text-white ${className}`}>
      {children}
    </h1>
  );
}
