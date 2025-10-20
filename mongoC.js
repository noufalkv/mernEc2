import { MongoClient } from "mongodb";
import 'dotenv/config';
// Ensure the MONGO_PASSWORD environment variable is set before calling .trim()
const rawPassword = process.env.MONGO_PASSWORD;
if (!rawPassword) {
  // Provide a clear message so the developer knows how to fix it.
  console.error('Environment variable MONGO_PASSWORD is not set. Set it (for example via a .env file or your shell) before starting the app.');
  throw new Error('MONGO_PASSWORD environment variable is required');
}
const password = encodeURIComponent(rawPassword.trim());
const connectionString = `mongodb+srv://chatapp_admin:${password}@cluster0.degp6u6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; // clustore url



const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("mernEc2");
export default db;