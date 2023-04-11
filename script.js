fetch('https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&appid=fc8cbc0ccc5fec7b68329c837bb82e7f')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });