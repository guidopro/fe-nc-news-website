import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://guys-app.onrender.com/api",
  // timeout: 1000,
});

export const getArticles = async (topic, sort_by, order, p) => {
  return await apiClient.get("/articles", {
    params: { topic, sort_by, order, p },
  });
};

export const getSingleArticle = async (id) => {
  return await apiClient.get(`/articles/${id}`);
};

export const getCommentsByArticleId = async (id) => {
  try {
    const response = await apiClient.get(`/articles/${id}/comments`);
    return response.data.comments;
  } catch (err) {
    return "No comments";
  }
};

export const getUsers = async () => {
  try {
    const response = await apiClient.get("/users");
    return response.data.users;
  } catch (err) {
    console.log(err, "error");
  }
};

export const getUsername = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data.user;
  } catch (err) {
    console.log(err, "error");
  }
};

export const patchVoteForArticle = async (id, vote) => {
  const response = await apiClient.patch(`/articles/${id}`, {
    inc_votes: vote,
  });
  return response.data.updatedArticle;
};

export const postComment = async (id, comment) => {
  const response = await apiClient.post(`/articles/${id}/comments`, comment);
  return response.data.postedComment;
};

export const deleteComment = async (commentId) => {
  const response = await apiClient.delete(`/comments/${commentId}`);
};

export const getTopics = async () => {
  const response = await apiClient.get("/topics");
  return response.data.topics;
};
