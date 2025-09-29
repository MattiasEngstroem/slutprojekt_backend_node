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

export const findAllMatches = async () => {
  try {
    const db = await getConnection();
    const [rows] = await db.execute(`
        SELECT s.serie, s.utgivningsar, s.nummer,
        CONCAT(anv_soker.fornamn, ' ', anv_soker.efternamn)
        AS sokare,
        CONCAT(anv_ager.fornamn, ' ', anv_ager.efternamn)
        AS agare,
        ager.skick, ager.priside
        FROM objekt_i_samlingar soker
        JOIN objekt_i_samlingar ager
        ON soker.serietidning_id = ager.serietidning_id
        AND soker.ager_soker = 'Söker'
        AND ager.ager_soker = 'Äger'
        AND soker.anvandare_id <> ager.anvandare_id
        JOIN anvandare anv_soker
        ON anv_soker.id = soker.anvandare_id
        JOIN anvandare anv_ager
        ON anv_ager.id = ager.anvandare_id
        JOIN serietidningar s
        ON s.id = soker.serietidning_id
        `);
    return rows;
  } catch (error) {
    console.error("Fel vid hämtning av matchningar:", error.message);
    throw error;
  }
};

export const findUserById = async (id) => {
  try {
    const db = await getConnection();
    const [rows] = await db.execute(
      `
        SELECT fornamn, efternamn, mailadress, fodelsear, id
        FROM anvandare
        WHERE id = ?
        `,
      [id]
    );
    return rows[0];
  } catch (error) {
    console.error("Fel vid hämtning av användare:", error.message);
    throw error;
  }
};

export const findSearchResults = async (title, year) => {
  try {
    const db = await getConnection();
    const queryString = `SELECT *
        FROM serietidningar
        WHERE (serie LIKE ?
        OR titel LIKE ?)
        ${year ? "AND utgivningsar = ?" : ""}
        `;
    const values = [`%${title}%`, `%${title}%`];
    if (year) values.push(year);
    const [rows] = await db.execute(queryString, values);
    return rows;
  } catch (error) {
    console.error("Fel vid hämtning av sökresultat:", error.message);
    throw error;
  }
};

export const findAveragePrice = async (id) => {
  try {
    const db = await getConnection();
    const [rows] = await db.execute(
      `
        SELECT s.serie, s.utgivningsar, s.nummer,
        ROUND(AVG(o.priside),2) AS genomsnittlig_priside
        FROM objekt_i_samlingar o
        JOIN serietidningar s
            ON s.id = o.serietidning_id
        WHERE o.ager_soker = 'Äger'
            AND o.serietidning_id = ?
            GROUP BY s.id
        `,
      [id]
    );
    return rows[0];
  } catch (error) {
    console.error("Fel vid hämtning av pris:", error.message);
    throw error;
  }
};
