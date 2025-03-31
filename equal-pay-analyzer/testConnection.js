const connectDB = require("./database");

async function testDB() {
  const db = await connectDB();
  if (db) console.log("🎉 Database is ready!");
}

testDB();
