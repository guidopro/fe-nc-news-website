export default function Intro() {
  return (
    <div className="m-4 p-4">
      <p className="text-2xl font-light">Welcome to NC-News!</p>
      <p className="my-2">
        This is my first website, built using Node.js, React, and React Router.
        Please note that when you first load the site, there might be a brief
        50-second wait due to hosting on{" "}
        <a href="https://render.com/" className="underline">
          Render
        </a>
        ’s free tier. Feel free to explore, read the articles, and engage by
        liking and commenting. This project was created as part of a Digital
        Skills Bootcamp in Software Engineering provided by{" "}
        <a href="https://northcoders.com/" className="underline">
          Northcoders
        </a>
        , which I completed in March 2025. Thank you for visiting, and enjoy
        your time here!
      </p>
    </div>
  );
}
