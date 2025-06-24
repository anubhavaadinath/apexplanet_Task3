async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "b9b2f16b565f6b024faf9882dabff544"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    const weatherInfo = `
      <p><strong>Location:</strong> ${data.name}, ${data.sys.country}</p>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;

    document.getElementById("weatherInfo").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById("weatherInfo").innerText = error.message;
  }
}
