import { useContext, useEffect, useState } from "react";
import { getUsername, getUsers } from "../../api-requests/api-requests-axios";
import { UserContext } from "../contexts/user";
import { GoBackButton } from "../Buttons";

export default function SignInPage() {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, [user]);

  function handleSignIn(e) {
    e.preventDefault();
    getUsername(value).then((user) => {
      setUser(user);
      console.log(user);
    });
  }

  function handleSignOut() {
    setUser("");
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  const formattedUsers = users.map((user) => {
    return (
      <option key={user.username} value={user.username} disabled>
        {user.username}
      </option>
    );
  });

  return (
    <div>
      <div className="flex flex-col justify-center m-10 p-4 gap-4 border rounded-2xl bg-amber-100">
        <h2 className="flex justify-center text-lg underline">Sign in</h2>
        <div className="flex justify-center">
          <span className="flex w-24 h-24 rounded-full ring-2 ring-black bg-white overflow-hidden">
            {user && (
              <img
                src={user.avatar_url}
                alt={`${user.username} user img`}
                className="rounded-full"
              />
            )}
            {!user && (
              <img
                src="../../../public/user.png"
                alt="default img"
                className="rounded-full"
              />
            )}
          </span>
        </div>

        <p className="flex justify-center">Welcome {user.name}</p>
        <div className="flex justify-center">
          <form onSubmit={handleSignIn}>
            {!user && (
              <select
                className=" bg-amber-50 border"
                defaultValue="choose-a-user"
                value={value}
                onChange={handleChange}
              >
                <option value="choose-a-user" disabled>
                  Choose a user
                </option>
                {formattedUsers}
                <option value="guestuser">guestuser</option>
              </select>
            )}
            {!user && (
              <button
                className="bg-amber-50 border m-2 px-1 rounded-md hover:cursor-pointer"
                type="submit"
              >
                Log in
              </button>
            )}
            {user && (
              <button
                type="button"
                onClick={handleSignOut}
                className="bg-amber-50 border m-2 px-1 rounded-md hover:cursor-pointer"
              >
                Log out
              </button>
            )}
          </form>
        </div>
      </div>
      <GoBackButton />
    </div>
  );
}
