const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config();

// Body parse middleware
app.use(express.json());

// Cors middleware config
// var corsOptions = {
//   origin: "http://example.com",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));
app.use(cors());

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
