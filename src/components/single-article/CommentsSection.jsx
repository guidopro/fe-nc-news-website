import { useEffect, useState } from "react";
import {
  getCommentsByArticleId,
  getUsername,
  getUsers,
} from "../../api-requests/api-requests-axios";
import CommentCard from "./CommentCard";

export default function CommentsSection({ article_id, newPost }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentDelete, setCommentDelete] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [newPost, commentDelete]);

  const formattedComments = comments.map((comment) => {
    return (
      <CommentCard
        key={comment.comment_id}
        commentId={comment.comment_id}
        createdAt={comment.created_at}
        author={comment.author}
        body={comment.body}
        setCommentDelete={setCommentDelete}
        votes={comment.votes}
      />
    );
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-6">
        <ol className="m-0 p-0 list-none">{formattedComments}</ol>
      </div>
    </>
  );
}
