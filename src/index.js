import express from "express";
import comicsRouter from "./routes/comicRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api", comicsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
