import { useTheme } from "next-themes";
import Logo from "../components/Logo";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <header className=" border-b bg-gray-100">
      <div className=" container mx-auto px-4 sm:px-6 py-4">
        <Logo />
        <div>
          <p>
            The current theme is: <b>{theme}</b>
          </p>
          <button onClick={() => setTheme("light")}>Light Mode</button>
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </div>
      </div>
    </header>
  );
}
