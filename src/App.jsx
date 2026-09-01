import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles.css";
import ArticlesList from "./components/ArticlesList";
import Footer from "./components/Footer";
import SingleArticle from "./components/single-article/SingleArticle";
import Pagination from "./components/Pagination";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Intro from "./components/Intro";
import SignIn from "./components/SignIn/SignIn";
import SignInPage from "./components/SignIn/SignInPage";
import FilterFeature from "./components/FilterFeature/FilterFeature";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <SignIn />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route index element={<Home />} />
            <Route path="articles?" element={<Home />} />
            <Route path="articles/:topic" element={<Home />} />
            <Route
              path="articles/:topic/:article_id"
              element={<SingleArticle />}
            />
            <Route path="sign-in" element={<SignInPage />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
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
      <FilterFeature
        setPage={setPage}
        setTopic={setTopic}
        setSortBy={setSortBy}
        setOrder={setOrder}
      />
      <ArticlesList
        setArticleCount={setArticleCount}
        topic={topic}
        page={page}
        sortBy={sortBy}
        order={order}
      />
      <Pagination
        articleCount={articleCount}
        setPage={setPage}
        page={page}
        limit={limit}
      />
    </>
  );
};

export default App;
