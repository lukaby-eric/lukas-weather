const apiKey ="0efe401da23845edb539bd5dab0b132a";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const allContent = document.getElementById("all-contents");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src ="assets/images/clouds.png";
        allContent.style.backgroundImage = "url(assets/images/cll.gif)";
        allContent.style.backgroundSize = "cover";
        allContent.style.backgroundRepeat = "no-repeat";
    }else if (data.weather[0].main == "Clear") {
        weatherIcon.src ="assets/images/clear.png";
        allContent.style.background = "url(assets/images/sun.webp)";
        allContent.style.backgroundSize = "cover";
        allContent.style.backgroundRepeat = "no-repeat";
    }else if (data.weather[0].main == "Rain") {
        weatherIcon.src ="assets/images/rain.png";
        allContent.style.background = "url(assets/images/rr.gif)";
        allContent.style.backgroundSize = "cover";
        allContent.style.backgroundRepeat = "no-repeat";
    }else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src ="assets/images/drizzle.png";
        allContent.style.background = "url(assets/images/drizz.webp)";
        allContent.style.backgroundSize = "cover";
        allContent.style.backgroundRepeat = "no-repeat";
    }else if (data.weather[0].main == "Mist") {
        weatherIcon.src ="assets/images/mist.png";
        allContent.style.background = "url(assets/images/mistt.webp)";
        allContent.style.backgroundSize = "cover";
        allContent.style.backgroundRepeat = "no-repeat";
    }else if (data.weather[0].main == "Snow") {
        weatherIcon.src ="assets/images/snow.png";
        allContent.style.background = "url(assets/images/sno.gif)";
        allContent.style.backgroundSize = "cover";
        allContent.style.backgroundRepeat = "no-repeat";
    }

    document.querySelector(".weather").style.display="block";

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
