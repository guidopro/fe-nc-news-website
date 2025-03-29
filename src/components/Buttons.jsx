export const DisabledButton = ({ text }) => {
  return (
    <button
      type="button"
      class="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-xs px-4 py-2.5 text-center"
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
      className="bg-amber-100 p-1 m-1 border-2 hover:cursor-pointer hover:scale-110"
      type="button"
      onClick={() => handleCommentDeletion()}
    >
      x
    </button>
  );
};
