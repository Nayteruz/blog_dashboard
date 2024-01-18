import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const PORT = 3000;

mongoose
  .connect(process.env.MONGODB_CONNECT)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("Error", err);
  });

const app = express();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use("/api/user", userRoutes);
