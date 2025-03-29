import { useEffect, useState } from "react";
import {
  getCommentsByArticleId,
  getUsername,
  getUsers,
} from "../../api-requests-axios";
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
      />
    );
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <ol className="px-5">{formattedComments}</ol>
    </>
  );
}
