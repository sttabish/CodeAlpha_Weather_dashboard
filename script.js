const apiKey = "a8ba43128846b2fef2dd2c09c025f47f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else {
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clear.png";
    }
    else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "drizzle.png";
    }
    else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "snow.png";
    }
    else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})


//location

document.getElementById('currentLocationBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a8ba43128846b2fef2dd2c09c025f47f`);

        if (response.status == 200) {
          var data = await response.json();

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
          document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

          if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
          }
          else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
          }
          else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
          }
          else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
          }
          else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png";
          }
          else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
          }

          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
        }
        else {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        }
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  });


  //clock


   // Calling showTime function at every second
   setInterval(showTime, 1000);

   // Defining showTime funcion
   function showTime() {
     // Getting current time and date
     let time = new Date();
     let hour = time.getHours();
     let min = time.getMinutes();
     let sec = time.getSeconds();
     am_pm = "AM";

     // Setting time for 12 Hrs format
     if (hour >= 12) {
       if (hour > 12) hour -= 12;
       am_pm = "PM";
     } else if (hour == 0) {
       hr = 12;
       am_pm = "AM";
     }

     hour =
       hour < 10 ? "0" + hour : hour;
     min = min < 10 ? "0" + min : min;
     sec = sec < 10 ? "0" + sec : sec;

     let currentTime =
       hour +
       ":" +
       min +
       ":" +
       sec +
       am_pm;

     // Displaying the time
     document.getElementById(
       "clock"
     ).innerHTML = currentTime;
   }

   showTime();
