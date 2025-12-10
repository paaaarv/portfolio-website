const apiKey = process.env.BLOG_API_KEY;

exports.handler = async () => {
  try {
    const response = await fetch("https://dev.to/api/articles/me", {
      headers: { "api-key": apiKey },
    });

    if (!response.ok) {
      // log for debugging
      console.error("Dev.to error status:", response.status);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Upstream API error" }),
        headers: { "Content-Type": "application/json" },
      };
    }

    const data = await response.json(); // ✅ parse JSON from dev.to

    const formattedData = data.map((post) => ({
      title: post.title,
      cover_image: post.cover_image,
      body: post.body_markdown,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(formattedData), // ✅ real JSON
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Function failed", details: error.message }),
      headers: { "Content-Type": "application/json" },
    };
  }
};
