const apiKey = import.meta.env.VITE_BLOG_API_KEY; 

export const fetchArticles = async (res, req) => {
  try {
    const response = await fetch("https://dev.to/api/articles/me", {
      headers: { "api-key": apiKey }
    });
    const data = await response.json();
    const formattedData = formatData(data); 
    data.json(formattedData);
  } catch (error) {
    console.log(error.message); 
  }
};

const formatData = (data) => {
  return (data.map((post) => ({
    title: post.title, 
    cover_image: post.cover_image, 
    body: post.body_markdown
  })
))
}
