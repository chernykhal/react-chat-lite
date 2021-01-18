const express = require("express");

const app = express();

const rooms = new Map([[], []]);

app.get("/rooms", function (req, res) {});
app.listen(9999, (error) => {
  if (error) {
    throw Error(error);
  }
  console.log("Сервер запущен!");
});
