import { drizzle } from "drizzle-orm/neon-http"

export const connectDb = () => {
    const db = drizzle(process.env.DATABASE_URL!);
    global.db = db;
}