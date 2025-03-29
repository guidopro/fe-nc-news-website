import { useState } from "react";
import { DisabledButton, SubmitButton } from "../Buttons";
import { postComment } from "../../api-requests-axios";

export default function NewComment({ article_id, setNewPost }) {
  const user = "tickle122";
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCommentPost = (e) => {
    setIsLoading(true);
    e.preventDefault();

    const comment = { body, username: user };

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
    <div className="px-5 py-10 mx-auto">
      <form onSubmit={handleCommentPost}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
              onChange={(e) => {
                setBody(e.target.value);
              }}
              value={body}
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
            {isLoading ? (
              <DisabledButton text="Submitting..." />
            ) : (
              <SubmitButton text="Post comment" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
