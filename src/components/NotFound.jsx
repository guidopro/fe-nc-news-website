import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-4 bg-amber-100 p-5">
      <h2 className="flex justify-center font-bold">Page not found</h2>
      <p className="flex justify-center">
        Click {"  "}
        <Link to="/" className="text-blue-700 mx-2">
          here
        </Link>{" "}
        to return to the homepage
      </p>
    </div>
  );
}
