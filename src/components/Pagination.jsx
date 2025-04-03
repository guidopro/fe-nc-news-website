export default function Pagination({ articleCount, setPage, page, limit }) {
  const pagesCeil = Math.ceil(articleCount / limit);

  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-black">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {((page ?? 1) - 1) * 10 + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {Math.min((page ?? 1) * 10, articleCount)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {articleCount}
          </span>{" "}
          Articles
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            disabled={page === 1}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer"
          >
            Prev
          </button>
          <button
            disabled={page === pagesCeil}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
