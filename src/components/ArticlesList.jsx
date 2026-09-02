import { useEffect, useState } from "react";
import { LoadingCards } from "./skeletons/LoadingCards";
import { getArticles } from "../api-requests/api-requests-axios";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { ErrorComponent } from "./Error";
import { dateParser } from "../functions/functions";
import urlNavBuilder from "../functions/urlNavBuilder";
import FilterFeature from "./FilterFeature/FilterFeature";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const { topic: urlTopic } = useParams();

  const [searchParams] = useSearchParams();

  // states
  const [articleCount, setArticleCount] = useState(0);
  const [topic, setTopic] = useState(urlTopic || null);
  const [page, setPage] = useState(
    searchParams.get("page") ? Number(searchParams.get("page")) : null,
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || null);
  const [order, setOrder] = useState(searchParams.get("order") || null);
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
    return <ArticleCard key={article.article_id} article={article} />;
  });

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-6">
          <FilterFeature
            setPage={setPage}
            topic={topic}
            setTopic={setTopic}
            sortBy={sortBy}
            setSortBy={setSortBy}
            order={order}
            setOrder={setOrder}
          />

          <div className="flex flex-wrap -m-4">
            {!isLoading ? formattedArticles : <LoadingCards />}
          </div>
        </div>
      </div>
    </section>
  );
}
