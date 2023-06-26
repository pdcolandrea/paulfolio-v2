import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu as FMenu } from "react-feather";

interface DropdownProps {
  items: unknown[];
}

function Dropdown({ items }: DropdownProps) {
  return (
    <div className="flex relative items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:ring-4 ring-accent focus:ring-offset-2 dark:ring-offset-black rounded outline-none duration-300">
          <FMenu />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Dropdown;
