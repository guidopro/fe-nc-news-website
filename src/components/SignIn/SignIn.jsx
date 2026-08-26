import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user";
import { useContext } from "react";

export default function SignIn() {
  const { user, setUser } = useContext(UserContext);

  function handleSignOut() {
    setUser("");
  }

  return (
    <div className="flex justify-end bg-blue-950 px-6 py-2 text-white">
      {!user && (
        <Link className="hover:underline" to="sign-in">
          Sign in
        </Link>
      )}
      {user && (
        <>
          <div className="flex items-center gap-3">
            <span>Signed in as: {user.username}</span>
            <button className="hover:underline" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
