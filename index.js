const express = require("express");
const app = express();
const conn = require("./db/conn");
const path = require("path");
const userRoutes = require("./routes/usersRoutes");

const basePath = path.join(__dirname, "views/layouts");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/home.html`);
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(`O erro foi: ${err}`));
