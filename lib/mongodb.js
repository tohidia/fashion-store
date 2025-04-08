

// import mongoose from "mongoose";

// // MongoDB URI from environment variables
// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
// //   throw new Error("process.env.MONGODB_URI environment variable is missing in .env.local");
//  throw new Error("Missing MONGODB_URI in .env.local file");
// }

// // Caching the connection to prevent multiple connections on re-renders
// let cached = global.mongoose || { conn: null, promise: null };

// export async function connectToDatabase() {
//   // If there's already a cached connection, use it
//   if (cached.conn) {
//     return cached.conn;
//   }

//   // Otherwise, create a new connection
//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }



import mongoose from "mongoose";

// MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI in .env.local file");
}

// Caching the connection to prevent multiple connections on re-renders
let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  // If already connected, return cached connection
  if (cached.conn) {
    return cached.conn;
  }

  // Otherwise, create a new connection
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongoose) => {
        console.log("✅ Connected to MongoDB");
        return mongoose;
      })
      .catch((error) => {
        console.error("❌ MongoDB connection error:", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

