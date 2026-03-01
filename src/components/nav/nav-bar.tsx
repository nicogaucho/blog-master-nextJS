import { UserButton } from "@stackframe/stack";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { stackServerApp } from "@/stack/server";

export default async function Navbar() {
  const user = await stackServerApp.getUser();

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white">
      <nav className="mx-auto flex w-full items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">The Ocean Affairs Blog</span>
        </div>
        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              {user ? (
                <NavigationMenuItem>
                  <UserButton />
                </NavigationMenuItem>
              ) : (
                <>
                  <NavigationMenuItem>
                    <Button asChild variant="outline">
                      <Link href={"/handler/signin"}>Sign in</Link>
                    </Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button asChild variant="default">
                      <Link href={"/handler/signup"}>Sign up</Link>
                    </Button>
                  </NavigationMenuItem>
                </>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
}
