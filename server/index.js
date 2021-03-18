const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("Serveris veikia")
})

server.listen(5000, () => {
    console.log(`Cars MERN server is running on http://localhost:5000`);
})