import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, SquareUser } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function UserDropdown({
  children,
  role,
}: {
  children: React.ReactNode | React.ReactNode[];
  role: string;
}) {
  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleLogout() {
    // ! API CALL HERE
    localStorage.removeItem("user");
    redirect("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit min-w-0">
        <div className="w-full rounded p-1 flex flex-col">
          <span className="text-xs">Role</span>
          <span className="font-semibold flex items-center">
            {capitalize(role)}
          </span>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/account" className="flex gap-2">
            <SquareUser size={18} strokeWidth={1.5} />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2" onClick={handleLogout}>
          <LogOut size={18} strokeWidth={1.5} />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
