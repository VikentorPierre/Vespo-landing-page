const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// API calls
app.get("/api/hello", (req, res) => {
  const { name, email } = req.body;
  console.log("name is " + name + "email is:" + email);
  //console.log("yes finnaly it works ");
  res.send({ express: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  res.send(`I received your POST reques: ${req.body.post}`);
});
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
