export const fetchArticles = async () => {
  const res = await fetch("/.netlify/functions/devto-articles");
  if (!res.ok) {
  throw new Error(`Request failed: ${res.status}`);
  }   
  const data = await res.json(); 
  return data
};
