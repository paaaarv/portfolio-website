// netlify/functions/devto-articles.cjs
const apiKey = process.env.VITE_BLOG_API_KEY;

exports.handler = async () => {
  try {
    const response = await fetch("https://dev.to/api/articles/me/all", {
      headers: { "api-key": apiKey },
    });
    
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Dev.to API failed", response: response.status }),
        headers: { "Content-Type": "application/json" },
      };
    }
    
    const data = await response.json(); 
    
    const formattedData = data.map((post) => ({
      title: post.title,
      cover_image: post.cover_image,
      body: post.body_markdown,
    }));
    
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formattedData),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
