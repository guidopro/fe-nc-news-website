import { useContext, useEffect, useState } from "react";
import { getUsername, getUsers } from "../../api-requests/api-requests-axios";
import { UserContext } from "../contexts/user";
import { GoBackButton } from "../Buttons";

export default function SignInPage() {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, [user]);

  function handleSignIn(e) {
    e.preventDefault();

    getUsername(value).then((user) => {
      setUser(user);
    });
  }

  function handleSignOut() {
    setUser("");
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <main className="text-gray-700">
      <div className="max-w-md mx-auto px-4 sm:px-6 py-8">
        <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <h1 className="mb-6 text-center text-2xl font-semibold text-gray-900">
            Sign in
          </h1>

          <div className="flex justify-center mb-5">
            <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 ring-2 ring-gray-200">
              {user ? (
                <img
                  src={user.avatar_url}
                  alt={`${user.username} user`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src="/user.png"
                  alt="Default user"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>

          {user ? (
            <>
              <p className="mb-6 text-center text-gray-700">
                Welcome,{" "}
                <span className="font-medium text-gray-900">{user.name}</span>
              </p>

              <div className="flex justify-center">
                <form onSubmit={handleSignOut}>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  >
                    Log out
                  </button>
                </form>
              </div>
            </>
          ) : (
            <>
              <p className="mb-5 text-center text-sm text-gray-500">
                Choose a user to sign in.
              </p>

              <form onSubmit={handleSignIn} className="flex flex-col gap-3">
                <label
                  htmlFor="user"
                  className="text-sm font-medium text-gray-700"
                >
                  User
                </label>

                <select
                  id="user"
                  value={value}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm focus:border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="" disabled>
                    Choose a user
                  </option>

                  {users.map((user) => (
                    <option key={user.username} value={user.username} disabled>
                      {user.username}
                    </option>
                  ))}

                  <option value="guestuser">guestuser</option>
                </select>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-blue-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
                >
                  Log in
                </button>
              </form>
            </>
          )}
        </div>

        <GoBackButton />
      </div>
    </main>
  );
}
