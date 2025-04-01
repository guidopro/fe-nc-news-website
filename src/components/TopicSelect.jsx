import { useState, useEffect } from "react";
import { getTopics } from "../api-requests/api-requests-axios"


export default function TopicSelect({ setPage, setTopic }) {
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setAllTopics(topics);
    });
  }, []);

  function handleClick(e) {
    setTopic(e?.target?.textContent ?? null);
    setPage(1);
  }

  const formattedTopics = allTopics.map((topic) => {
    return (
      <li
        key={topic.slug}
        className="hover:font-bold hover:cursor-pointer capitalize"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {topic.slug}
      </li>
    );
  });

  return (
    <ul className="flex flex-wrap justify-center gap-4 mt-10">
      <li
        className="hover:font-bold hover:cursor-pointer"
        onClick={() => {
          handleClick();
        }}
      >
        All Topics
      </li>
      {formattedTopics}
    </ul>
  );
}
