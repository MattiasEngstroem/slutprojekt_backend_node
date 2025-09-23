import { getConnection } from "../config/database.js";

export const findAllComics = async () => {
  try {
    const db = await getConnection();
    const [rows] = await db.execute(`
        SELECT serie, utgivningsar AS år, nummer, titel, id
        FROM serietidningar
        ORDER BY serie, år, nummer
        `);
    return rows;
  } catch (error) {
    console.error("Fel vid hämtning av serietidningar:", error.message);
    throw error;
  }
};
