const express = require("express");
const server = express();
server.listen(3000, () => console.log("listening at 3000"));
server.use(express.static("public"));
server.use(express.json({ limit: "1mb" }));
// telling the server to parse things it receives as json and to limit them to 1mb
server.post("/api", (req, res) => {
  console.log(req.body);
  response.json({
    status: "success",
    latitude: lat,
    longitude: long
  });
});

// the request variable holds all the information that you are recevinging form the client
// the response variable is something you can send back to the client
