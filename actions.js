const API_KEY = process.env.WEATHER_API_KEY;

export const fetchWeather = async (city = "ljubljana", unit="metric", contentType="json", include = []) =>{
    const queryString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&include=${include.join(",")}&key=${API_KEY}&contentType=${contentType}`
    console.log(queryString)
    try {
        const data = await fetch(queryString);
        return await data.json();   
    } catch (error) {
        console.error(error);    
        console.log(queryString)
    }
}