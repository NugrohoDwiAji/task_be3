import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const Db = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  port: process.env.DB_PORT,
  password: "",
  database: process.env.DATABASE,
  connectionLimit: 10,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export async function testConnection() {
  try {
    await Db.getConnection();
    console.log("Koneksi ke database berhasil!!!");
  } catch (error) {
    console.log("koneksi gagal", error);
  }
}

export async function query(query, value) {
  try {
    const [excekuteQuery] = await Db.query(query, value ?? []);
    return excekuteQuery;
  } catch (error) {
    console.log(error);
  }
}


