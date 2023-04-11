var currentCityTitle = document.querySelector("#current-city");
var currentTemp = document.querySelector("#temperature");
var currentHumidity = document.querySelector("#humidity");
var currentWind = document.querySelector("#wind-speed");

function getWeather (lat,lon) {
  


fetch('https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat='+lat+'&lon='+lon+'&appid=8d31f65d830eb3f31dc7c23c8cacb3bc')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data.city.name)
    console.log(data);
    currentCityTitle.textContent = data.city.name
    currentTemp.textContent = "Temperature: " + data.list[0].main.temp 
    currentHumidity.textContent = "Humidity: " + data.list[0].main.humidity + "%"
    currentWind.textContent = data.list[0]
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

getCoord ("Seattle");

