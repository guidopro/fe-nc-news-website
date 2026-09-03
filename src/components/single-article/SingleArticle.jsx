import { useEffect, useState } from "react";
import { getSingleArticle } from "../../api-requests/api-requests-axios";
import { useParams } from "react-router-dom";
import LoadingSingleArticle from "../skeletons/LoadingSingleArticle";
import CommentsSection from "./CommentsSection";
import Like from "./Like";
import NewComment from "./NewComment";
import { ErrorComponent } from "../Error";
import { dateParser } from "../../functions/functions";
import { GoBackButton } from "../Buttons";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState({});
  const [newPost, setNewPost] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getSingleArticle(article_id)
      .then(({ data: { article } }) => {
        setArticle(article);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  if (error) {
    if (error.status === 404) {
      return <ErrorComponent message={"Article not found"} />;
    }
  }

  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <GoBackButton />

          <article className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {isLoading ? (
              <LoadingSingleArticle />
            ) : (
              <>
                <img
                  className="w-full h-64 sm:h-80 md:h-[420px] object-cover object-center"
                  src={article.article_img_url}
                  alt={article.title}
                />

                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-gray-500">
                    <span className="font-medium text-gray-700 capitalize">
                      {article.topic}
                    </span>

                    <span className="text-gray-300">•</span>

                    <time>
                      {article?.created_at
                        ? dateParser(article.created_at)
                        : ""}
                    </time>

                    <span className="text-gray-300">•</span>

                    <span className="inline-flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      {article.comment_count}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-gray-900 mb-6">
                    {article.title}
                  </h1>

                  <div className="max-w-3xl">
                    <p className="text-base sm:text-lg leading-8 text-gray-700 whitespace-pre-line">
                      {article.body}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-100 px-6 sm:px-8 md:px-10 py-6 flex justify-center">
                  <Like votes={article.votes} id={article.article_id} />
                </div>
              </>
            )}
          </article>
        </div>
      </section>

      <NewComment article_id={article_id} setNewPost={setNewPost} />

      <CommentsSection article_id={article_id} newPost={newPost} />
    </>
  );
}
