import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB connected!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export { connectDB };
