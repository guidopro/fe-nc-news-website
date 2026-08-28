export const LoadingCards = () => {
  const loadingCards = [];

  for (let i = 0; i < 9; i++) {
    loadingCards.push(
      <div key={i} className="p-4 w-full md:w-1/3">
        <div className="relative isolate h-full min-h-[360px] border-2 border-gray-200 rounded-lg overflow-hidden animate-pulse">
          {/* Image */}
          <div className="h-48 md:h-36 lg:h-48 w-full bg-gray-300"></div>

          {/* Content */}
          <div className="p-6">
            {/* Category */}
            <div className="h-3 w-20 bg-gray-300 rounded-full mb-3"></div>

            {/* Topic */}
            <div className="h-5 w-32 bg-gray-400 rounded-full mb-4"></div>

            {/* Date */}
            <div className="h-3 w-24 bg-gray-300 rounded-full mb-5"></div>

            {/* Article title */}

            <div className="h-4 w-full bg-gray-300 rounded-full mb-3"></div>
            <div className="h-4 w-full bg-gray-300 rounded-full mb-3"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded-full mb-3"></div>
            <div className="h-4 w-2/3 bg-gray-300 rounded-full"></div>

            {/* Stats */}
            <div className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center">
              <div className="h-4 w-10 bg-gray-300 rounded-full mr-4"></div>
              <div className="h-4 w-10 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>,
    );
  }

  return <>{loadingCards}</>;
};
