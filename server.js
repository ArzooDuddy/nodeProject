const express = require("express");
const app = express();
const port = 3000;
const { userRouter } = require("./routes/userRoutes");
// Middleware to parse JSON bodies

app.use(express.json());
const mongoose = require("mongoose");
const moongose_Url =
  "mongodb+srv://arzoo:auwXK27AxHLfkHfB@cluster0.znagfom.mongodb.net/";
// mongodb+srv://itsandeepverma:sandeepverma@cluster0.dx5zoyg.mongodb.net/?retryWrites=true&w=majority
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
try {
  mongoose.connect(moongose_Url, connectionParams);
  console.log("Connected to database successfully");
} catch (error) {
  console.log(error);
  console.log("Could not connect data");
}
// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define a sample API route
app.use("/api", userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
