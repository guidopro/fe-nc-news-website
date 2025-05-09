import { useEffect, useState } from "react";
import { LoadingCards } from "./skeletons/LoadingCards";
import { getArticles } from "../api-requests/api-requests-axios";
import {
  Link,
  useSearchParams,
  useNavigate,
  useParams,
} from "react-router-dom";
import { ErrorComponent } from "./Error";
import { dateParser } from "../functions/functions";
import urlNavBuilder from "../functions/urlNavBuilder";

export default function ArticlesList({
  setArticleCount,
  topic,
  page,
  sortBy,
  order,
}) {
  // const { topic } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const sortByQ = searchParams.get("sort_by");
  // const orderQ = searchParams.get("order");
  // const pageQ = searchParams.get("p");

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const url = urlNavBuilder(topic, page, sortBy, order);
    navigate(url);
    setError(null);
    setIsLoading(true);
    getArticles(topic, sortBy, order, page)
      .then(({ data }) => {
        setArticleCount(data.total_count);
        setArticles(data.articles);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic, sortBy, order, page]);

  if (error) {
    const message = "There are currently no articles with this topic";
    return <ErrorComponent message={message} />;
  }

  const formattedArticles = articles.map((article) => {
    return (
      <div key={article.article_id} className="p-4 md:w-1/3">
        <div className="relative isolate h-full border-2 border-gray-200 rounded-lg overflow-hidden hover:bg-zinc-400 hover:scale-101">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={article.article_img_url}
            alt={article.title}
          />

          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-700 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 capitalize">
              <Link to={`/articles/${article.topic}/${article.article_id}`}>
                <span className="absolute inset-0 z-10"></span>
                {article.topic}
              </Link>
            </h1>
            <div className="flex">
              <time className="mb-4 font-light">
                {dateParser(article.created_at)}
              </time>
            </div>
            <p className="leading-relaxed mb-3">{article.title}</p>
            <div className="absolute bottom-0 right-0 mb-2 mr-2">
              <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
                {article.votes}
              </span>
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
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-10 mx-auto">
        <p className="flex justify-center m-4">
          {isLoading ? "Loading..." : null}
        </p>
        <div className="flex flex-wrap -m-4">
          {!isLoading ? formattedArticles : <LoadingCards />}
        </div>
      </div>
    </section>
  );
}
