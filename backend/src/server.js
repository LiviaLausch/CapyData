const express = require("express");
const routes = require("./routes");
const database = require("./database/connection");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

database
  .raw("SELECT 1")
  .then(() => {
    console.log("Database connection established successfully!");
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
