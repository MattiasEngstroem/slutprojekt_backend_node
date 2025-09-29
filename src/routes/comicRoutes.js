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

router.get("/comics/search", async (req, res) => {
  try {
    const { title, year } = req.query;
    const parsedYear = year ? Number(year) : undefined;
    const results = await comicService.getSearchResults(title, parsedYear);
    res.json(results);
  } catch (error) {
    console.error("Error fetching search results:", error.message);
    res.status(500).json({
      error: "Failed to fetch search results",
      details: error.message,
    });
  }
});

router.get("/comics/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const comics = await comicService.getComicsById(Number(id));
    res.json(comics);
  } catch (error) {
    console.error("Error fetching comics:", error.message);
    res.status(500).json({
      error: "Failed to fetch comics",
      details: error.message,
    });
  }
});

router.get("/comics/averageprice/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const comics = await comicService.getAveragePrice(Number(id));
    res.json(comics);
  } catch (error) {
    console.error("Error fetching price:", error.message);
    res.status(500).json({
      error: "Failed to fetch price",
      details: error.message,
    });
  }
});

router.get("/users/matches", async (req, res) => {
  try {
    const matches = await comicService.getAllMatches();
    res.json(matches);
  } catch (error) {
    console.error("Error fetching matches:", error.message);
    res.status(500).json({
      error: "Failed to fetch matches",
      details: error.message,
    });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await comicService.getUserById(Number(id));
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({
      error: "Failed to fetch users",
      details: error.message,
    });
  }
});

export default router;
