const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.options("*", cors());




//Define Routes
app.use("/", (req, res) => res.send("Working bro!"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
