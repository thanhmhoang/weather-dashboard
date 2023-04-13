var currentCityTitle = document.querySelector("#current-city");
var currentTemp = document.querySelector("#temperature");
var currentHumidity = document.querySelector("#humidity");
var currentWind = document.querySelector("#wind-speed");
var searchBtn = document.querySelector("#button-addon2");
var searchInput =document.querySelector("#search-input");
dayjs.extend(window.dayjs_plugin_utc)
dayjs.extend(window.dayjs_plugin_timezone)

function getWeather (lat,lon) {
var currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=8d31f65d830eb3f31dc7c23c8cacb3bc` 
fetch(currentWeatherURL)
.then(function (response) {
  return response.json();
})
.then(function(data) {
  console.log(data)
  var today = dayjs().format('MM/DD/YYYY');
  currentCityTitle.textContent = `${data.name} ${today}`
  var weatherIcon = document.querySelector("#currentweather-icon");
  var iconURL = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png"
  weatherIcon.setAttribute("src", iconURL)
  currentTemp.textContent = "Temperature: " + data.main.temp + " \xB0F"
  currentHumidity.textContent = "Humidity: " + data.main.humidity + " %"
  currentWind.textContent = "Wind Speed: " + data.wind.speed + " MPH"
}) 

fetch('https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat='+lat+'&lon='+lon+'&appid=8d31f65d830eb3f31dc7c23c8cacb3bc')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data.city.name)
    console.log(data);
    
    for (var i = 0; i < data.list.length; i+=8) {
      console.log(data.list[i])

    }
  });
}

function getCoord (cityName) {
  fetch('http://api.openweathermap.org/geo/1.0/direct?q='+cityName+'&limit=5&appid=8d31f65d830eb3f31dc7c23c8cacb3bc')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data[0].lat);
    console.log(data[0].lon);
    getWeather (data[0].lat,data[0].lon)
  });
}

function submitSearch () {
  var city = searchInput.value
  console.log(city)
  getCoord(city)
}

// Code to get current day





searchBtn.onclick = submitSearch