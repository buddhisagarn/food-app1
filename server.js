const express = require("express");

//rest object
const app = express();

//route
//URL https://localhost:8080

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to the food server</h1>");
});

//port
const PORT = 8080;

//listen
app.listen(PORT, () => {
  console.log("Server is running");
});
