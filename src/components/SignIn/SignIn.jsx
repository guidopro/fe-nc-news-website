import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user";
import { useContext } from "react";

export default function SignIn() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-row-reverse bg-blue-950 text-white">
      {!user && <Link to="sign-in">Sign in</Link>}
      {user && <Link to="sign-in">Signed in as: {user.username}</Link>}
    </div>
  );
}
