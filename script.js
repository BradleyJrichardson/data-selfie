const express = require("express");
const server = express();
server.listen(3000, () => console.log("listening at 3000"));
server.use(express.static("public"));
