import { useEffect, useState } from "react";
import { getSingleArticle } from "../../api-requests/api-requests-axios";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSingleArticle from "../skeletons/LoadingSingleArticle";
import CommentsSection from "./CommentsSection";
import Like from "./Like";
import NewComment from "./NewComment";
import { ErrorComponent } from "../Error";
import { dateParser } from "../../functions/functions";
import { GoBackButton } from "../Buttons";

export default function SingleArticle() {
  const navigate = useNavigate();
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
  }, []);

  if (error) {
    if (error.status === 404) {
      return <ErrorComponent message={"Article not found"} />;
    }
  }

  return (
    <>
      <section className="text-gray-700 body-font">
        <GoBackButton />
        <div className="px-5 py-10 mx-auto">
          <p className="flex justify-center m-4">
            {isLoading ? "Loading..." : null}
          </p>
          <div className="flex flex-wrap -m-4">
            <div key={article.article_id} className="p-4 md:w-1/1">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                {isLoading && <LoadingSingleArticle />}

                <img
                  className="max-h-100 w-full object-cover object-center"
                  src={article.article_img_url}
                  alt={article.title}
                />

                <div className="p-6 ">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-700 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 capitalize">
                    {article.topic}
                  </h1>
                  <time className="mb-4 font-light">
                    {article?.created_at ? dateParser(article.created_at) : ""}
                  </time>
                  <p className="leading-relaxed my-3">{article.title}</p>
                  <div className="flex items-center flex-wrap">
                    <span className="text-gray-600 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      {article.comment_count}
                    </span>
                  </div>
                  <p className="mt-5">{article.body}</p>
                </div>
                <div className="flex justify-center mb-6">
                  <Like votes={article.votes} id={article.article_id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewComment article_id={article_id} setNewPost={setNewPost} />
      <CommentsSection article_id={article_id} newPost={newPost} />
    </>
  );
}
