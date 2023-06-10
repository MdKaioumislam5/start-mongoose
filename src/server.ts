import mongoose from "mongoose";
import app from "./app";

const port = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`Database connection successful`);
    app.listen(port, () => {
      console.log(`Finally app listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Database can't connect`, err);
  }
}

main();
