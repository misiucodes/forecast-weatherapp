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
  let tempDescription = document.querySelector("#temp-description");
  let currentWeatherIcon = document.querySelector("#currentWeatherIcon");
  let windspeed = document.querySelector("#windspeed-units");
  let humidity = document.querySelector("#humidity-units");
  showTemp.innerHTML = `${temperature}`;
  cityName.innerHTML = `${response.data.name}`;
  tempDescription.innerHTML = `${response.data.weather[0].description}`;
  windspeed.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  humidity.innerHTML = `${Math.round(response.data.main.humidity)}%`;
  currentWeatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  
  celciusTemperature = response.data.main.temp;
  console.log(response);
}

function displayForecast () {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  let forecastHTML = `<div class="row d-flex justify-content-evenly">`;
  days.forEach(function (day) {
    forecastHTML = forecastHTML + 
    `
    <div class="col">
      <div class="weather-forecast-date">${day}</div>
      <img src="img/sun.png" class="forecast-icon" width="80px"/>
          
        <div class="weekly-temps">
          <span class="temp-max">-1 / </span>
          <span class="temp-min"> 2</span>
        <div class="weather-forecast-description">Cloudy</div>
      </div>
    </div>
    `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

displayForecast ();
