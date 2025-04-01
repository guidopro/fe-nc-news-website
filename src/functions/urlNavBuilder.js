export default function urlNavBuilder(topic, page, sortBy, order) {
  let url = `/articles`;

  if (topic) {
    url += `/${topic}`;
  }

  if (page) {
    url += `?page=${page}`;
  }

  if (sortBy) {
    url += `&sortBy=${sortBy}`;
  }

  if (order) {
    url += `&order=${order}`;
  }

  return url;
}
