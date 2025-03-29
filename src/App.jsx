import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

import "./styles.css";
import { fetchArticles, fetchTopics } from "./api-requests";
import SortBy from "./components/SortBy";
import ArticlesList from "./components/ArticlesList";
import Footer from "./components/Footer";
import SingleArticle from "./components/single-article/SingleArticle";
import Pagination from "./components/Pagination";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path=":topic">
          <Route index element={<Home />} />
          <Route path=":article_id" element={<SingleArticle />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

const Home = () => {
  const [topic, setTopic] = useState("");

  return (
    <>
      <Intro />
      <TopicSelect setTopic={setTopic} />
      <SortBy />
      <Pagination />
      <ArticlesList topic={topic} />
    </>
  );
};

const Header = () => {
  return (
    <div className="flex items-center justify-evenly p-2 bg-blue-900">
      <Link to="/">
        <img className="size-27 " src="/world_travel_icon_134840.webp" />
      </Link>
      <Link to="/">
        <h1 className="text-6xl font-mono bg-amber-50  ">NC-News</h1>
      </Link>
    </div>
  );
};

const Intro = () => {
  return (
    <div>
      <p className="text-2xl font-light">Hello there</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia
        suscipit iusto voluptatem velit ducimus soluta obcaecati facilis,
        aliquid iure. Esse ipsam atque fugiat quo numquam reiciendis corrupti
        ipsa nostrum.
      </p>
    </div>
  );
};

const TopicSelect = ({ setTopic }) => {
  const [topics, setTopics] = useState([]);
  const { topic } = useParams();

  function clickTopic(e) {
    setTopic(e);
  }

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
      // if (!topics.include(topic)) {
      //   return <Navigate to="/not-found" />;
      // }
    });
  }, []);

  const formattedTopics = topics.map((topic) => {
    return (
      <li
        key={topic.slug}
        value={topic.slug}
        onClick={(e) => clickTopic(e.target.textContent)}
        className="hover:font-bold hover:cursor-pointer"
      >
        <Link to={`/${topic.slug}`}>{topic.slug}</Link>
      </li>
    );
  });

  return (
    <ul className="flex  justify-evenly mt-10">
      <li
        onClick={() => clickTopic("")}
        className="hover:font-bold hover:cursor-pointer"
      >
        <Link to="/">all topics</Link>
      </li>
      {formattedTopics}
    </ul>
  );
};

export default App;
