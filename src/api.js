const axios = require("axios");

async function getWeather(city) {
  if (!city) {
    console.error("No city provided for weather lookup.");
    return;
  }
  const { API_URL, API_KEY } = process.env;
  try {
    const res = await axios.get(`${API_URL}?key=${API_KEY}&q=${city}`);
    const data = res.data;
    console.log(`Weather in ${data.location.name}, ${data.location.country}:`);
    console.log(`- Temperature: ${data.current.temp_c}°C`);
    console.log(`- Condition: ${data.current.condition.text}`);
    console.log(`- Humidity: ${data.current.humidity}%`);
    console.log(`- Wind Speed: ${data.current.wind_kph} kph`);
  } catch (err) {
    console.log("API error:", err.message);
  }
}

module.exports = getWeather;
