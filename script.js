function showCurrentDateTime() {
  let h4 = document.querySelector("h4");
  let h5 = document.querySelector("h5");

  let now = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[now.getDay()];
  let date = now.getDate();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  let hour = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2,"0");

  h4.innerHTML = `${day}, ${month} ${date}, ${year}`;
  h5.innerHTML = `${hour}:${minutes}`;
}

showCurrentDateTime();

function showCitySearched(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = `${searchInput.value}`;
  let units = "metric";
  let apiKey = "ef1f6e14d39c4aa8875abd79b5398d89";
  let endPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${endPoint}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", showCitySearched);

function showTemperature(response) {
  let showTemp = document.querySelector("#current-temp");
  let temperature = Math.round(response.data.main.temp);
  let cityName = document.querySelector("h3");
  let currentWeatherIcon = document.querySelector("#currentWeatherIcon");
  showTemp.innerHTML = `${temperature}`;
  cityName.innerHTML = `${response.data.name}`;
  currentWeatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  console.log(response);
}


