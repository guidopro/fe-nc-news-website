export default function LoadingSingleArticle() {
  return (
    <div role="status" className="animate-pulse">
      {/* Image */}
      <div className="w-full h-[300px] sm:h-[400px] bg-gray-300"></div>

      {/* Article content */}
      <div className="p-6 sm:p-8">
        {/* Category label */}
        <div className="h-3 w-20 bg-gray-200 rounded-full mb-3"></div>

        {/* Topic */}
        <div className="h-6 w-32 bg-gray-200 rounded-full mb-4"></div>

        {/* Date */}
        <div className="h-3 w-28 bg-gray-200 rounded-full mb-5"></div>

        {/* Title */}
        <div className="h-6 w-3/4 bg-gray-200 rounded-full mb-3"></div>
        <div className="h-6 w-1/2 bg-gray-200 rounded-full mb-5"></div>

        {/* Comment count */}
        <div className="h-4 w-16 bg-gray-200 rounded-full mb-6"></div>

        {/* Body */}
        <div className="h-4 w-full bg-gray-200 rounded-full mb-3"></div>
        <div className="h-4 w-full bg-gray-200 rounded-full mb-3"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded-full mb-3"></div>
        <div className="h-4 w-4/6 bg-gray-200 rounded-full"></div>
      </div>

      {/* Like */}
      <div className="flex justify-center pb-8">
        <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
