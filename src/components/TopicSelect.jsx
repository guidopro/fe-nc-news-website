import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getTopics } from "../api-requests/api-requests-axios";

export default function TopicSelect({ setPage, setTopic }) {
  let { topic } = useParams();
  let activeTopic = topic;

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
        className={
          activeTopic === topic.slug
            ? "text-lg hover:font-bold hover:cursor-pointer hover:underline capitalize bg-amber-50 font-bold"
            : "text-lg hover:font-bold hover:cursor-pointer hover:underline capitalize"
        }
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {topic.slug}
      </li>
    );
  });

  return (
    <div className="ml-2 mt-9 p-1 rounded-tl-lg border-t border-l border-white bg-gradient-to-r from-emerald-100 to-blue-800">
      <ul className="flex flex-wrap mb-3 justify-evenly ">
        <li
          className={
            !activeTopic
              ? "text-lg hover:font-bold hover:cursor-pointer hover:underline capitalize bg-amber-50 font-bold"
              : "text-lg hover:font-bold hover:cursor-pointer hover:underline capitalize"
          }
          onClick={() => {
            handleClick();
          }}
        >
          All Topics
        </li>
        {formattedTopics}
      </ul>
    </div>
  );
}
