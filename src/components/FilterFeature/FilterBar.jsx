export default function FilterBar({
  topic,
  setTopic,
  sortBy,
  setSortBy,
  order,
  setOrder,
}) {
  const sortLabels = {
    "created_at-desc": "Newest",
    "created_at-asc": "Oldest",
    "votes-desc": "Most likes",
    "comment_count-desc": "Most comments",
  };

  const sortLabel = sortLabels[`${sortBy}-${order}`] || null;

  function handleRemoveSort() {
    setSortBy(null);
    setOrder(null);
  }

  function Item({ filterName, setFilter, type }) {
    const styles =
      type === "topic"
        ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
        : "bg-purple-100 text-purple-800 hover:bg-purple-200";

    if (!filterName) return null;
    return (
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${styles}`}
      >
        <span className="capitalize">{filterName}</span>
        <button
          className="font-bold opacity-60 hover:opacity-100 cursor-pointer"
          onClick={() => {
            setFilter(null);
          }}
          aria-label={`Remove ${filterName} filter`}
        >
          x
        </button>
      </div>
    );
  }

  if (!topic && !sortBy && !order) return null;

  return (
    <div className="flex flex-wrap items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
      <div className="font-semibold text-gray-700 text-sm">Filter:</div>
      <Item filterName={topic} setFilter={setTopic} type="topic" />
      <Item filterName={sortLabel} setFilter={handleRemoveSort} type="sort" />
      <button
        className="ml-auto text-sm font-medium text-red-500 hover:text-red-700 transition-colors cursor-pointer"
        onClick={() => {
          setOrder(null);
          setTopic(null);
          setSortBy(null);
        }}
      >
        Reset Filter
      </button>
    </div>
  );
}
