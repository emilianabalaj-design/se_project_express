const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const auth = require("./middlewares/auth");

const { login, createUser } = require("./controllers/users");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.post("/signin", login);
app.post("/signup", createUser);

app.use(auth);

app.use(routes);

app.use(errorLogger);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? "An error occurred" : message,
  });
});

mongoose
  .connect(
    "mongodb+srv://emilianabalaj_db_user:Tirana2016.@cluster0.khws6wp.mongodb.net/?appName=Cluster0"
  )
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

app.listen(PORT, () => {
  // console.log(`Server is running on port ${PORT}`);
});
