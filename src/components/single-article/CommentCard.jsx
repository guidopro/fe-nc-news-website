import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user";
import {
  deleteComment,
  getUsername,
} from "../../api-requests/api-requests-axios";
import { DeleteButton } from "../Buttons";
import Spinner from "../Spinner";
import { dateParser } from "../../functions/functions";
import LikeComment from "./LikeComment";

export default function CommentCard({
  createdAt,
  author,
  body,
  commentId,
  setCommentDelete,
  votes,
}) {
  const { user } = useContext(UserContext);

  const [commentAuthor, setCommentAuthor] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsername(author).then((user) => {
      setCommentAuthor(user);
    });
  }, [author]);

  function handleCommentDeletion() {
    setIsLoading(true);

    deleteComment(commentId).then(() => {
      setCommentDelete((prevState) => !prevState);
      setIsLoading(false);
    });
  }

  return (
    <li>
      <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        {isLoading ? (
          <div className="flex h-10 items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <img
                    className="h-full w-full object-cover"
                    src={commentAuthor.avatar_url}
                    alt={`${author} author`}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900">{author}</p>

                  <time className="text-xs text-gray-400">
                    {dateParser(createdAt)}
                  </time>
                </div>
              </div>

              {user?.username === author && (
                <DeleteButton handleCommentDeletion={handleCommentDeletion} />
              )}
            </div>

            <p className="whitespace-pre-line text-sm leading-6 text-gray-700">
              {body}
            </p>

            <div className="mt-5 flex justify-center border-t border-gray-100 pt-4">
              <LikeComment votes={votes} id={commentId} />
            </div>
          </>
        )}
      </article>
    </li>
  );
}
