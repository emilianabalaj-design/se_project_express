const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const auth = require("./middlewares/auth");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(auth);

app.use((req, res, next) => {
  req.user = {
    _id: "5d8b8592978f8bd833ca8133",
  };
  next();
});

app.use(routes);

app.use((err, req, res) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? "An error occurred" : message,
  });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => console.error("Connected to DB"))
  .catch(console.error);

app.listen(PORT, () => {
  // console.log(`Server is running on port ${PORT}`);
});
