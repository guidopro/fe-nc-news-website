import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-evenly p-2 bg-blue-900">
      <Link to="/">
        <img className="size-27 " src="/world_travel_icon_134840.webp" />
      </Link>
      <Link to="/">
        <h1 className="inline text-6xl font-mono bg-amber-50 p-1">NC-News</h1>
      </Link>
    </div>
  );
}
