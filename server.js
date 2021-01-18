const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

const rooms = new Map([[], []]);

app.get("/rooms", function (req, res) {
  res.json(rooms);
});

io.on("connection", (socket) => {
  console.log("user connected", socket);
});

server.listen(9999, (error) => {
  if (error) {
    throw Error(error);
  }
  console.log("Сервер запущен!");
});
