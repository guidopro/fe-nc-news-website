import { useNavigate } from "react-router-dom";

export const ErrorComponent = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-2.5 p-5 bg-amber-100">
      <h1 className=" self-center text-2xl">Error</h1>
      <p className=" self-center">{message}</p>
      <p className=" self-center">
        Click{" "}
        <button
          className="text-blue-900 hover:cursor-pointer"
          onClick={() => navigate(-1)}
        >
          here
        </button>{" "}
        to go back
      </p>
    </div>
  );
};
