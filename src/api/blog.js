
export const fetchArticles = async () => {
  const res = await fetch("api/devto-articles");
  const response = await res.json();
  return response;
}