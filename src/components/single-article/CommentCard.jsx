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
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    getUsername(author).then((user) => {
      setCommentAuthor(user);
    });
  }, []);

  function handleCommentDeletion() {
    setIsLoading(true);
    deleteComment(commentId).then(() => {
      setCommentDelete((prevState) => !prevState);
      setIsLoading(false);
    });
  }

  return (
    <li className="mb-10">
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs dark:bg-gray-700 dark:border-gray-600">
        {isLoading ? (
          <div className="flex justify-center mb-3 p-3 h-10">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="flex justify-between mb-3 ">
              <div className="flex items-center">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-3 ring-2 ring-blue overflow-hidden mr-3">
                  <img
                    className="rounded-full"
                    src={commentAuthor.avatar_url}
                    alt={`${author} author image`}
                  />
                </span>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300 mr-3">
                  {author}
                </div>
                <time className="mb-1 text-xs font-normal text-gray-400 sm:mb-0">
                  {dateParser(createdAt)}
                </time>
              </div>

              <div>
                {user.username === author ? (
                  isLoading ? null : (
                    <DeleteButton
                      handleCommentDeletion={handleCommentDeletion}
                    />
                  )
                ) : null}
              </div>
            </div>
            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
              {body}
            </div>
            <div className="flex justify-center mt-4">
              <LikeComment votes={votes} id={commentId} />
            </div>
          </>
        )}
      </div>
    </li>
  );
}
