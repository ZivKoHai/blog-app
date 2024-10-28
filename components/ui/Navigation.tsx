import Link from "next/link";
import AuthMenu from "../AuthMenu";
import { ModeToggle } from "./Modetoggle";

export default function Navigation() {
  return (
    <nav className="z-10">
      <input type="checkbox" id="nav-toggle" className="hidden peer" />

      <label
        htmlFor="nav-toggle"
        className="lg:hidden cursor-pointer p-4 z-20 fixed top-4 right-4"
      >
        <span className="block w-6 h-0.5 mb-1 bg-greenBlog peer-checked:h-0"></span>
        <span className="block w-6 h-0.5 mb-1 bg-greenBlog peer-checked:rotate-45"></span>
        <span className="block w-6 h-0.5 bg-greenBlog peer-checked:-rotate-45"></span>
      </label>

      <ul
        className="
          flex flex-col items-center gap-6
          fixed top-0 right-0 w-[70%] h-full bg-background py-10
          transform transition-transform duration-300 translate-x-full
          peer-checked:translate-x-0
          lg:flex-row lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:translate-x-0
        "
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li className="">
          <div className="flex items-center gap-2">
            <AuthMenu />
            <ModeToggle />
          </div>
        </li>
      </ul>
    </nav>
  );
}
