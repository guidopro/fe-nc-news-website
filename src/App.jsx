import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useParams,
  useNavigate,
} from "react-router-dom";

import "./styles.css";
import SortBy from "./components/SortBy";
import ArticlesList from "./components/ArticlesList";
import Footer from "./components/Footer";
import SingleArticle from "./components/single-article/SingleArticle";
import Pagination from "./components/Pagination";
import NotFound from "./components/NotFound";
import { getTopics } from "./api-requests/api-requests-axios";
import urlNavBuilder from "./functions/urlNavBuilder";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="articles?" element={<Home />} />
        <Route path="articles/:topic" element={<Home />} />
        <Route path="articles/:topic/:article_id" element={<SingleArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

const Home = () => {
  // const { topic } = useParams();
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("");

  const [articleCount, setArticleCount] = useState(0);

  return (
    <>
      <Intro />
      <TopicSelect setPage={setPage} topic={topic} setTopic={setTopic} />
      <SortBy setPage={setPage} setSortBy={setSortBy} />
      <Pagination
        articleCount={articleCount}
        setPage={setPage}
        page={page}
        limit={limit}
        topic={topic}
      />
      <ArticlesList
        topic={topic}
        setArticleCount={setArticleCount}
        page={page}
      />
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

const TopicSelect = ({ setPage, topic, setTopic }) => {
  const navigate = useNavigate();
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setAllTopics(topics);
    });
  }, []);

  function handleClick(e) {
    setTopic(e.target.textContent || "");
    setPage(1);
    navigate(urlNavBuilder(topic));
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
          handleClick("");
        }}
      >
        All Topics
      </li>
      {formattedTopics}
    </ul>
  );
};

export default App;
