import { useState } from "react";
import { patchCommentVote } from "../../api-requests/api-requests-axios";
import ErrorMessage from "../ErrorMessage";

export default function LikeComment({ votes, id }) {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [error, setError] = useState(null);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount((currCount) => {
        return currCount + 1;
      });
      setIsLiked(true);
      setIsDisliked(false);
      setError(null);
      patchCommentVote(id, 1).catch(() => {
        setError("Your like was not successful. Try submitting again later");
        setLikeCount((currCount) => {
          return currCount - 1;
        });
        setIsLiked(false);
      });
    }
  };

  const handleDisLike = () => {
    if (!isDisliked) {
      setLikeCount((currCount) => {
        return currCount - 1;
      });
      setIsDisliked(true);
      setIsLiked(false);
      setError(null);
      patchCommentVote(id, -1).catch(() => {
        setError("Your like was not successful. Try submitting again later");
        setLikeCount((currCount) => {
          return currCount + 1;
        });
        setIsDisliked(false);
      });
    }
  };

  return (
    <>
      <div
        className="border inline-flex rounded-md shadow-xs bg-gray-800"
        role="group"
      >
        <button
          type="button"
          className="text-blue-700 border-r border-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 hover:cursor-pointer"
          onClick={() => {
            handleLike();
          }}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
          <span className="sr-only">Icon description</span>
        </button>
        <p className=" border-blue-700 font-medium text-white rounded-lg text-sm p-2.5 text-center inline-flex items-center">
          {(votes || 0) + likeCount}
        </p>
        <button
          type="button"
          className="text-blue-700 border-l border-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 hover:cursor-pointer"
          onClick={() => {
            handleDisLike();
          }}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"
            />
          </svg>

          <span className="sr-only">Icon description</span>
        </button>
      </div>
      {error && <ErrorMessage error={error} />}
    </>
  );
}
