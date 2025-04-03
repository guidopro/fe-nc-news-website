import { useNavigate } from "react-router-dom";

export const DisabledButton = ({ text }) => {
  return (
    <button
      type="button"
      className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-xs px-4 py-2.5 text-center"
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
      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 hover:cursor-pointer"
    >
      {text}
    </button>
  );
};

export const DeleteButton = ({ handleCommentDeletion }) => {
  return (
    <button
      className="bg-amber-100 p-1 m-1 border-2 hover:cursor-pointer hover:scale-110 rounded-lg"
      type="button"
      onClick={() => handleCommentDeletion()}
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
        onClick={() => {
          navigate(-1);
        }}
        className="flex items-center p-2 hover:cursor-pointer hover:font-bold"
      >
        Go back
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4 ml-1.5"
        >
          <path
            fillRule="evenodd"
            d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
