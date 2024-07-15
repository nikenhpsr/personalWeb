"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  // Detect if the user has set a preference and listen for changes
  const [theme, setTheme] = useState(() =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div className="flex justify-center">
      <nav className="flex justify-start gap-4 sticky top-0">
        <Link href="/" className="p-2 m-2 hover:text-slate-400">
          Home
        </Link>
        <Link href="/projects" className="p-2 m-2 hover:text-slate-400">
          Projects
        </Link>
        {/* <Link href="/experiences" className="p-2 m-2 hover:text-slate-400">Experiences</Link> */}
        <Link href="/articles" className="p-2 m-2 hover:text-slate-400">
          Articles
        </Link>
        <button onClick={toggleTheme} className="p-2 m-2 hover:text-slate-400">
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12.15V12a9 9 0 11-18 0v.15a7 7 0 0013.16 3.35A8.97 8.97 0 0121 12.15z"
              />
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
