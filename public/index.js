const d = document;
const round = (value, decimals) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

if ("geolocation" in navigator) {
  console.log("geolocation is avaliable");
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);

    const lat = round(position.coords.latitude, 2);
    const long = round(position.coords.longitude, 2);
    d.querySelector("#latitude").innerText = lat;
    d.querySelector("#longitude").innerText = long;

    const data = { lat, long };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    fetch("/api", options);
  });
} else {
  console.log("geolocation is not avaliable");
}
