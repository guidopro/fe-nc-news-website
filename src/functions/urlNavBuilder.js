export default function urlNavBuilder(topic, page, sortBy, order) {
  let url = "/articles";

  if (topic) {
    url += `/${topic}`;
  }

  const params = new URLSearchParams();

  if (page) params.set("page", page);
  if (sortBy) params.set("sortBy", sortBy);
  if (order) params.set("order", order);

  const queryString = params.toString();

  if (queryString) {
    url += `?${queryString}`;
  }

  return url;
}
