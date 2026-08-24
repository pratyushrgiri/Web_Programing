const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.warn("[StudyNest] MONGO_URI missing. Server running without DB connection.");
    return;
  }

  await mongoose.connect(mongoUri);
  console.log("[StudyNest] MongoDB connected.");
};

module.exports = connectDB;
