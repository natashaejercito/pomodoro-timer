const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "./frontend/dist")));

app.get("/", (req, res) => {
  res.json({ message: "Backend is working" });
});

app.listen(HTTP_PORT, () => {
  console.log(`server is running on http://localhost:${HTTP_PORT}`);
});
