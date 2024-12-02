import sqlite3 from "sqlite3";
import { open } from "sqlite"

export async function GET(request: Request) {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    })
    return Response.json(await db.all("SELECT * FROM camion"))
}