import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/auth";
import { capitalize } from "@/lib/utils";
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
  const { logout } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  function handleLogout() {
    logout();
    localStorage.removeItem("user");
    redirect("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <div className="w-full rounded p-1 flex flex-col">
          <span className="text-xs">Role</span>
          <span className="font-semibold flex items-center">
            {role && capitalize(role)}
          </span>
        </div>
        <DropdownMenuSeparator />
        <Link href="/account" className="w-full">
          <DropdownMenuItem className="w-full flex gap-2">
            <SquareUser size={18} strokeWidth={1.5} />
            Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2" onClick={handleLogout}>
          <LogOut size={18} strokeWidth={1.5} />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
