const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter = require("./authRouter");

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      process.env.DB_ACCESS,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("DB connected!")
    );
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();
