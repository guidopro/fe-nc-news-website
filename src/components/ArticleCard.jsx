import { Link } from "react-router-dom";
import { dateParser } from "../functions/functions";

export default function ArticleCard({ article }) {
  return (
    <div className="relative isolate flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-200 bg-white transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
      <img
        className="h-48 w-full object-cover object-center"
        src={article.article_img_url}
        alt={article.title}
      />

      <div className="relative flex flex-1 flex-col p-6">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
          {article.topic}
        </h2>

        <h1 className="mb-3 text-lg font-medium text-gray-900">
          <Link to={`/articles/${article.topic}/${article.article_id}`}>
            <span className="absolute inset-0 z-10"></span>
            {article.title}
          </Link>
        </h1>

        <time className="mb-4 block text-sm font-light text-gray-600">
          {dateParser(article.created_at)}
        </time>

        <div className="mt-auto flex justify-end">
          <span className="mr-3 inline-flex items-center border-r-2 border-gray-300 pr-3 text-sm leading-none text-gray-600">
            <svg
              className="mr-1 h-4 w-4"
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

          <span className="inline-flex items-center text-sm leading-none text-gray-600">
            <svg
              className="mr-1 h-4 w-4"
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
  );
}
