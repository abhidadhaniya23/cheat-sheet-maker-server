const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

// Body parse middleware
app.use(express.json());

// connect to Mongo
mongoose
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connected to db");
  })
  .catch((err) => console.log(err));

//Middleware api routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/sheets", require("./routes/api/sheets"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
