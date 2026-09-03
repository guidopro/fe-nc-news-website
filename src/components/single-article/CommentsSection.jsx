import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../api-requests/api-requests-axios";
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
  }, [article_id, newPost, commentDelete]);

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-6">
        <p className="text-sm text-red-600">{error.message}</p>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-8">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
        <p className="mt-1 text-sm text-gray-500">Join the conversation.</p>
      </div>

      {isLoading ? (
        <div className="py-6 text-center text-sm text-gray-500">
          Loading comments...
        </div>
      ) : comments.length === 0 ? (
        <p className="py-6 text-sm text-gray-500">
          No comments yet. Be the first to comment.
        </p>
      ) : (
        <ol className="m-0 list-none space-y-4 p-0">
          {comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              commentId={comment.comment_id}
              createdAt={comment.created_at}
              author={comment.author}
              body={comment.body}
              setCommentDelete={setCommentDelete}
              votes={comment.votes}
            />
          ))}
        </ol>
      )}
    </section>
  );
}
