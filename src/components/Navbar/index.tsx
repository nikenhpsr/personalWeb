import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="flex justify-start gap-4 sticky top-0">
        <Link href="/" className="p-2 m-2 hover:text-slate-400">
          Home
        </Link>
        <Link href="/projects" className="p-2 m-2 hover:text-slate-400">
          Projects
        </Link>
        <Link href="/experiences" className="p-2 m-2 hover:text-slate-400">
          Experiences
        </Link>
        <Link href="/articles" className="p-2 m-2 hover:text-slate-400">
          Articles
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
