import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-5 bg-blue-900 px-6 py-4">
      <Link to="/">
        <img
          className="size-20 object-contain"
          src="/world_travel_icon_134840.webp"
          alt="NC-News logo"
        />
      </Link>

      <Link to="/">
        <h1 className="bg-amber-50 px-4 py-2 font-mono text-5xl">NC-News</h1>
      </Link>
    </header>
  );
}
