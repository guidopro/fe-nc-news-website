import { useContext, useState } from "react";
import { DisabledButton, SubmitButton } from "../Buttons";
import { postComment } from "../../api-requests/api-requests-axios";
import { UserContext } from "../contexts/user";
import { Link } from "react-router-dom";

export default function NewComment({ article_id, setNewPost }) {
  const { user } = useContext(UserContext);
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCommentPost = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const comment = { body, username: user.username };

    postComment(article_id, comment)
      .then(() => {
        setNewPost((prevState) => !prevState);
        setBody("");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      {!user && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-4">
          <p className="text-sm text-gray-600">
            Please{" "}
            <Link
              to="/sign-in"
              className="font-medium text-blue-950 hover:underline"
            >
              sign in
            </Link>{" "}
            to leave a comment.
          </p>
        </div>
      )}

      {user && (
        <form onSubmit={handleCommentPost}>
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-4">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>

              <textarea
                id="comment"
                rows="4"
                className="w-full resize-y border-0 p-0 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
                placeholder="Write a comment..."
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
              />
            </div>

            <div className="flex items-center justify-end border-t border-gray-100 bg-gray-50 px-4 py-3">
              {isLoading ? (
                <DisabledButton text="Submitting..." />
              ) : (
                <SubmitButton text="Post comment" />
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
