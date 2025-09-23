import mysql from "mysql2/promise";

let connection;

export const getConnection = async () => {
  try {
    if (!connection) {
      connection = await mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "comics_user",
        password: "abc123",
        database: "miniprojekt_databasteknik",
      });
    }
    return connection;
  } catch (error) {
    console.error("Misslyckades med databasanslutning:", error.message);
    throw error;
  }
};
