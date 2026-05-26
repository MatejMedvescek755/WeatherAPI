const express = require("express");
require('dotenv').config();
const app = express();

app.get("/:place{/:unit}{/:contentType}", async (req, res) => {
    res.send(await fetchWeather(req.params.place));
});

const fetchWeather = async (city = "ljubljana", unit="metric", contentType="json") =>{
    const queryString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=${process.env.WEATHER_API_KEY}&contentType=${contentType}`
    const data = await fetch(queryString);
    return await data.json();
}

fetchWeather();

app.listen(8080, () => {
  console.log('REST API server running on port 8080');
}); 

