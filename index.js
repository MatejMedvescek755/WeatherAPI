const express = require("express");
require('dotenv').config();
const app = express();

app.get("/", async (req, res) => {
    res.send(await fetchWeather());
});

const fetchWeather = async () =>{
    const queryString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ljubljana?unitGroup=metric&key=${process.env.WEATHER_API_KEY}&contentType=json`
    console.log(queryString)
    const data = await fetch(queryString);
    return await data.json();
}

fetchWeather();

app.listen(8080, () => {
  console.log('REST API server running on port 8080');
}); 

