export default function Intro() {
  return (
    <div className="m-4 p-4">
      <p className="text-2xl font-light">Welcome to NC-News!</p>

      <p className="my-2">
        This is a full-stack news application built with Node.js, React, and
        React Router. When you first load the site, there may be a brief wait
        of up to 50 seconds while the server wakes up on{" "}
        <a href="https://render.com/" className="underline">
          Render
        </a>
        ’s free tier.
      </p>

      <p>
        Feel free to explore the articles, leave comments, and cast your
        votes. This project was created as part of the Software Engineering
        Digital Skills Bootcamp provided by{" "}
        <a href="https://northcoders.com/" className="underline">
          Northcoders
        </a>
        , which I completed in March 2025.
      </p>
    </div>
  );
}
