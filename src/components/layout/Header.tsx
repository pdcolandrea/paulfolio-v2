interface HeaderProps {
  singleItem: boolean;
  column?: boolean;
  children: React.ReactNode;
}

function Header({ singleItem, column, children }: HeaderProps) {
  return (
    <header
      className={`flex my-4 min-h-[4rem] ${column ? "flex-col" : "flex-row"} ${
        !singleItem && "justify-between items-center"
      }`}
    >
      {children}
    </header>
  );
}

export default Header;
