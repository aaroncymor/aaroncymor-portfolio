import Link from "next/link";
import {BsFillSunFill} from "react-icons/bs";

export default function Header({ darkMode, setDarkMode }) {

  return (
    <header className="absolute top-0 z-50">
      <nav>
        <ul className="flex flex-row bg-transparent dark:bg-transparent text-black dark:text-white">
          <li>
            <Link
              className="cursor-pointer text-black dark:text-white"
              href="/"
            >
              me
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer text-black dark:text-white"
              href="/skills/"
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer text-black dark:text-white"
              href="/experience/"
            >
              experiences
            </Link>
          </li>
          <li>
            <BsFillSunFill
              className="cursor-pointer text-black dark:text-white"
              onClick={() => {setDarkMode(!darkMode)}}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
