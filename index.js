const apiKey = "04cd1b1c8d5e26985e6d512fac96ffd9";
// const apiKey = "fe90b08b809fcfe0cc45bc4dd191de29";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherInfoBox = document.querySelector(".weather");
const errorMsg = document.querySelector(".error");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        
        errorMsg.style.display = "block";
        weatherInfoBox.style.display = "none";
        
    }else{
        var data = await response.json();

        // console.log(response);

        const cityName = data.name;
        const temperature = Math.round(data.main.temp) + "°c";
        const humidity = data.main.humidity + "%";
        const windSpeed = data.wind.speed + " km/h";

        const cityelem = document.querySelector(".city");
        const humidityelem = document.querySelector(".humidity");
        const windspeedelem = document.querySelector(".wind");
        const tempelem = document.querySelector(".temp");

        cityelem.innerHTML = cityName;
        humidityelem.innerHTML = humidity;
        tempelem.innerHTML = temperature;
        windspeedelem.innerHTML = windSpeed;

        const weatherCondition = data.weather[0].main;

        if(weatherCondition == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(weatherCondition == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(weatherCondition == "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(weatherCondition == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(weatherCondition == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(weatherCondition == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        errorMsg.style.display = "none";
        weatherInfoBox.style.display = "block";
    }
    
}

searchBtn.addEventListener("click", ()=> {
    const cityinput = searchBox.value;
    checkWeather(cityinput);
})

checkWeather();

/* https://api.openweathermap.org/data/2.5/weather?q=Chandigarh&appid=04cd1b1c8d5e26985e6d512fac96ffd9&units=metric */