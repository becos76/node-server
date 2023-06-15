const express = require("express")
const os = require("os");
const app = express()

app.get("/", (req, res) => {
  res.send("<h2>Served from: " + os.hostname + "</h2>")
})

app.listen(7777, () => {
  console.log("listening on port 7777")
})
