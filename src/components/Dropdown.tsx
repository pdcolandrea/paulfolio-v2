import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu as FMenu } from "react-feather";

interface Item {
  [key: string]: string | number;
  text: string;
  href: string;
}

interface DropdownProps {
  items: Item[];
}

function Dropdown({ items }: DropdownProps) {
  console.log;
  return (
    <div className="flex relative items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:ring-4 ring-accent focus:ring-offset-2 dark:ring-offset-black rounded outline-none duration-300">
          <FMenu className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-black dark:hover:text-white duration-300" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Navigation</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {items.map((link, index) => {
            return (
              <DropdownMenuItem key={`${index}${link.href}`}>
                {link.text}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Dropdown;
