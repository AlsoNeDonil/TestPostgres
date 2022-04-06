const express = require("express");
const userRouter = require("./routes/user.routes");
const postsRouter = require("./routes/posts.routes");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", postsRouter);

app.listen(PORT, () => console.log("Server has been started"));