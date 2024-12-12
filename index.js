// Express and routes
const express = require("express");
const userRoutes = require("./routes/UserRoutes");

// dot env setup
const dotenv = require("dotenv");
dotenv.config();

// db
require("./config/db");

// express intialization
const app = express();
app.use(express.json());
app.use(userRoutes);

// Server start
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("Server is running at : ", PORT);
});
