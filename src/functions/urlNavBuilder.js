export default function urlNavBuilder(topic, page, sort_by) {
  let url = `/articles`;

  if (topic) {
    url += `/${topic}`;
  }

  if (page) {
    url += `?page=${page}`;
  }

  if (sort_by) console.log(url);

  return url;
}
