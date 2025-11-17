// server.js
import express from "express";
import fetch from "node-fetch";
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;

// Load API key from environment
dotenv.config();
// eslint-disable-next-line no-undef
const apiKey = process.env.BLOG_API_KEY;
console.log('Loaded API Key:', apiKey);

app.get("/api/devto-articles", async (req, res) => {
  try {
    const response = await fetch("https://dev.to/api/articles/me", {
      headers: { "api-key": apiKey }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "API call failed", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
