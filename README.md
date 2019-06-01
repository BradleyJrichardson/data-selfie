<p align="center">
  <img width="400" height="250" src=ISS.png></p>

# Data Selfie app

> adfasda

[Click to play](https://objective-darwin-0b23b4.netlify.com)<br>

## Technologies

> nodemon
> [run a server with nodemon server.js]
> will continulously update during development

#

## Using the geolocation api

> The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

#### using an express server to post a static webpage

```javascript
const express = require("express");
const server = express();
server.listen(3000, () => console.log("listening at 3000"));
server.use(express.static("public"));
```

this will serve the public directory to port 3000,

## using Geolocation api

```javascript
if ("geolocation" in navigator) {
  console.log("geolocation is avaliable");
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);

    const lat = round(position.coords.latitude, 2);
    const long = round(position.coords.longitude, 2);
    d.querySelector("#latitude").innerText = lat;
    d.querySelector("#longitude").innerText = long;
  });
} else {
  console.log("geolocation is not avaliable");
}
```

the above code does a few things, firstly if geolocation is present it runs the function get current position.
we then log the output of this function to get an idea of the data it brings back.
then we proceed to select elements from the dom and fill their inner text with the respected lat and long

### Routing

```javascript
server.post("/api", (req, res) => {
  res.send("POST request to the homepage");
});
```

the request variable holds all the information that you are recevinging form the client
the response variable is something you can send back to the client
sud

### JSON Parsing

### POST with fecth()
