import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles.css";
import SortBy from "./components/SortBy";
import ArticlesList from "./components/ArticlesList";
import Footer from "./components/Footer";
import SingleArticle from "./components/single-article/SingleArticle";
import Pagination from "./components/Pagination";
import NotFound from "./components/NotFound";
import TopicSelect from "./components/TopicSelect";
import Header from "./components/Header";
import Intro from "./components/Intro";

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
  const [topic, setTopic] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState(null);
  const [page, setPage] = useState(null);
  const [limit, setLimit] = useState(10);

  const [articleCount, setArticleCount] = useState(0);

  return (
    <>
      <Intro />
      <TopicSelect setPage={setPage} setTopic={setTopic} />
      <div className="flex flex-wrap justify-center gap-4 mt-8 items-start">
        <Pagination
          articleCount={articleCount}
          setPage={setPage}
          page={page}
          limit={limit}
        />
        <SortBy setPage={setPage} setSortBy={setSortBy} setOrder={setOrder} />
      </div>
      <ArticlesList
        setArticleCount={setArticleCount}
        topic={topic}
        page={page}
        sortBy={sortBy}
        order={order}
      />
    </>
  );
};

export default App;
