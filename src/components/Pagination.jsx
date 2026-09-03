export default function Pagination({ articleCount, setPage, page, limit }) {
  const pagesCeil = Math.ceil(articleCount / limit);
  const currentPage = page ?? 1;

  const firstArticle = (currentPage - 1) * limit + 1;
  const lastArticle = Math.min(currentPage * limit, articleCount);

  return (
    <div className="flex flex-col items-center gap-3 py-8">
      <span className="text-sm text-gray-600">
        Showing{" "}
        <span className="font-semibold text-gray-900">{firstArticle}</span> to{" "}
        <span className="font-semibold text-gray-900">{lastArticle}</span> of{" "}
        <span className="font-semibold text-gray-900">{articleCount}</span>{" "}
        Articles
      </span>

      <div className="inline-flex overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
          className="flex h-10 items-center justify-center border-r border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300"
        >
          ← Prev
        </button>

        <div className="flex h-10 items-center justify-center bg-gray-50 px-4 text-sm font-semibold text-gray-800">
          {currentPage}
        </div>

        <button
          disabled={currentPage === pagesCeil}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
          className="flex h-10 items-center justify-center border-l border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
