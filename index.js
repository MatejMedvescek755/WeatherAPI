import { fetchWeather } from "./actions.js";

import express from "express";
const app = express()

app.get("/:place{/:unit}{/:contentType}", async (req, res) => {
    const {place} = req.params;
    const {unit, contentType, array } = req.query
    res.send(await fetchWeather(place, unit, contentType, array ? array.split(",") : []));
});

app.get("/alerts/:place{/:unit}{/:contentType}" , async ( req, res) =>{
    const params = req.params
})

app.listen(8080, () => {
  console.log('REST API server running on port 8080')
}); 

