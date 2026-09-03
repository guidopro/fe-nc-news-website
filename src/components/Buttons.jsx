import { useNavigate } from "react-router-dom";

export const DisabledButton = ({ text }) => {
  return (
    <button
      type="button"
      className="rounded-lg bg-gray-300 px-4 py-2.5 text-sm font-medium text-gray-500 cursor-not-allowed"
      disabled
    >
      {text}
    </button>
  );
};

export const SubmitButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="rounded-lg bg-blue-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
    >
      {text}
    </button>
  );
};

export const DeleteButton = ({ handleCommentDeletion }) => {
  return (
    <button
      type="button"
      onClick={handleCommentDeletion}
      className="rounded-md px-2.5 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200"
    >
      Delete
    </button>
  );
};

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center mt-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        Go back
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="ml-1.5 size-4"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 1 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
