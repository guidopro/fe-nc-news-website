export const fetchArticles = (topic) => {
  const topicQuery = `?topic=${topic}`;

  return fetch(`https://guys-app.onrender.com/api/articles${topicQuery}`)
    .then((response) => response.json())
    .then((data) => {
      return data.articles;
    });
};

export const fetchTopics = () => {
  return fetch("https://guys-app.onrender.com/api/topics")
    .then((response) => response.json())
    .then((data) => {
      return data.topics;
    });
};


