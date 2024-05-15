import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({
  path: "./.env",
});

const app = express();

connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));
