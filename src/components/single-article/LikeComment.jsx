import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";
import { patchCommentVote } from "../../api-requests/api-requests-axios";
import ErrorMessage from "../ErrorMessage";

export default function LikeComment({ votes, id }) {
  const { user } = useContext(UserContext);

  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [error, setError] = useState(null);

  const handleLike = () => {
    if (!user) {
      setError("You must be signed in to vote");
      return;
    }

    if (!isLiked) {
      setLikeCount((currCount) => currCount + 1);
      setIsLiked(true);
      setIsDisliked(false);
      setError(null);

      patchCommentVote(id, 1).catch(() => {
        setError("Your like was not successful. Try submitting again later");
        setLikeCount((currCount) => currCount - 1);
        setIsLiked(false);
      });
    }
  };

  const handleDisLike = () => {
    if (!user) {
      setError("You must be signed in to vote");
      return;
    }

    if (!isDisliked) {
      setLikeCount((currCount) => currCount - 1);
      setIsDisliked(true);
      setIsLiked(false);
      setError(null);

      patchCommentVote(id, -1).catch(() => {
        setError("Your dislike was not successful. Try submitting again later");
        setLikeCount((currCount) => currCount + 1);
        setIsDisliked(false);
      });
    }
  };

  return (
    <>
      <div className="relative inline-block">
        <div
          className="inline-flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm"
          role="group"
          aria-label="Comment voting"
        >
          <button
            type="button"
            onClick={handleLike}
            aria-label="Like comment"
            className={`p-2.5 transition-colors hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 ${
              isLiked
                ? "bg-blue-950 text-white"
                : "text-gray-500 hover:bg-gray-100 hover:text-blue-950"
            }`}
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
              />
            </svg>
          </button>

          <span className="min-w-12 border-x border-gray-200 px-3 py-2.5 text-center text-sm font-medium text-gray-700">
            {(votes || 0) + likeCount}
          </span>

          <button
            type="button"
            onClick={handleDisLike}
            aria-label="Dislike comment"
            className={`p-2.5 transition-colors hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 ${
              isDisliked
                ? "bg-blue-950 text-white"
                : "text-gray-500 hover:bg-gray-100 hover:text-blue-950"
            }`}
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 1-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 1 18.5 5v0A1.5 1.5 0 0 1 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"
              />
            </svg>
          </button>
        </div>

        {error && (
          <div className="absolute left-0 top-full z-10 mt-2 w-72">
            <ErrorMessage error={error} setError={setError} />{" "}
          </div>
        )}
      </div>
    </>
  );
}
