export const fetchArticles = async () => {
  const res = await fetch("/.netlify/functions/devto-articles");
  if (!res.ok) {
  throw new Error(`Request failed: ${res.status}`);
}
const text = await res.text();
console.log(text);    
};
