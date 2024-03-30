const connectionMongo = require("./db");
const express = require("express");
connectionMongo();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", require("./routes/api/auth"));

app.use("/api/profile", require("./routes/api/profile"));

app.use("/api/posts", require("./routes/api/post"));

app.use("/api/like", require("./routes/api/like"));

app.use("/api/comments", require("./routes/api/comment"));

app.use("/api/users", require("./routes/api/follow"));

app.use("/api/conversations", require("./routes/api/conversation"));

app.use("/api/messages", require("./routes/api/message"));

app.use("/api/notifications", require("./routes/api/notification"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
