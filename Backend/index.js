import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
