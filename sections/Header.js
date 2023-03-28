import { useRef, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Switch } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import Logo from "../components/Logo";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import FloyoutMenu from "../components/FloyoutMenu";
import MobileMenu from "../components/MobileMenu";

export default function Header() {
  const darkMode = useDarkMode(false);
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef();
  const isLargeScreen = useMediaQuery(["(min-width: 640px)"], [true], false);

  return (
    <header className="">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between">
        <Logo />
        <div className="flex">
          <div className="flex mr-2">
            <SunIcon className="w-7 h-7" />
            <Switch
              checked={darkMode.value}
              onChange={() => darkMode.toggle()}
            />
            <MoonIcon className="w-7 h-7" />
          </div>
          <div>
            {!session ? (
              <button
                type="button"
                onClick={signIn}
                className="bg-blue-600
                hover:bg-blue-700
                text-white
                px-3
                py-1
                rounded-md
                border-2
                border-blue-600
                hover:border-blue-700
                text-md
                sm:text-md
                focus:ring-4
                focus:ring-blue-600
                focus:ring-opacity-50
                whitespace-nowrap"
              >
                signIn
              </button>
            ) : (
              <div className="relative" ref={containerRef}>
                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="flex items-center space-x-1 sm:space-x-2"
                >
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="rounded-full border-2 border-blue-600 w-8 h-8"
                  />
                  <p className="flex items-center sm:space-x-1">
                    <span className="hidden sm:inline-block">
                      Hello, {session.user.name?.split(" ")?.[0] ?? "there"}
                    </span>
                    <ChevronDownIcon className="w-4 h-4 flex-shrink-1" />
                  </p>
                </button>

                <FloyoutMenu
                  show={menuOpen && isLargeScreen}
                  onClose={() => setMenuOpen(false)}
                  containerRef={containerRef}
                />

                <MobileMenu
                  show={menuOpen && !isLargeScreen}
                  onClose={() => setMenuOpen(false)}
                  containerRef={containerRef}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
