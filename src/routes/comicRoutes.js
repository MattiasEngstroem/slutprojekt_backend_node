import express from "express";
import * as comicService from "../services/comicService.js";

const router = express.Router();

router.get("/comics", async (req, res) => {
  try {
    const comics = await comicService.getAllComics();
    res.json(comics);
  } catch (error) {
    console.error("Error fetching comics:", error.message);
    res.status(500).json({
      error: "Failed to fetch comics",
      details: error.message,
    });
  }
});

export default router;
