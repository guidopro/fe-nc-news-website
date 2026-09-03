export const LoadingCards = () => {
  const loadingCards = [];

  for (let i = 0; i < 9; i++) {
    loadingCards.push(
      <div
        key={i}
        className="relative isolate flex h-full min-h-[360px] flex-col overflow-hidden rounded-lg border-2 border-gray-200 bg-white animate-pulse"
      >
        {/* Image */}
        <div className="h-48 w-full bg-gray-300"></div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col p-6">
          {/* Category */}
          <div className="mb-3 h-3 w-20 rounded-full bg-gray-300"></div>

          {/* Topic */}
          <div className="mb-4 h-5 w-32 rounded-full bg-gray-400"></div>

          {/* Date */}
          <div className="mb-5 h-3 w-24 rounded-full bg-gray-300"></div>

          {/* Article title */}
          <div className="mb-3 h-4 w-full rounded-full bg-gray-300"></div>
          <div className="mb-3 h-4 w-full rounded-full bg-gray-300"></div>
          <div className="mb-3 h-4 w-5/6 rounded-full bg-gray-300"></div>
          <div className="h-4 w-2/3 rounded-full bg-gray-300"></div>

          {/* Stats */}
          <div className="mt-auto flex justify-end">
            <div className="mr-4 h-4 w-10 rounded-full bg-gray-300"></div>
            <div className="h-4 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>,
    );
  }

  return <>{loadingCards}</>;
};
