import Link from "next/link";
import { CommandLineIcon } from "@heroicons/react/24/outline";

export default function Logo() {
  return (
    <Link href="/">
      <p className="flex items-center space-x-1 text-blue-600">
        <CommandLineIcon className=" w-8 h-8 flex-shrink-0" />
        <span className=" font-bold text-lg tracking-tight whitespace-nowrap">
          Blog for dev
        </span>
      </p>
    </Link>
  );
}
