const apiKey ="0efe401da23845edb539bd5dab0b132a";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const allContent = document.getElementById("all-contents");
const fernh = document.querySelector(".fernh");
const temper = document.querySelector(".temp");
const felTemp = document.querySelector(".fl-temp");
const felFern = document.querySelector(".fl-fernh");
const ferBtn = document.querySelector("#ferBtn");
const celBtn = document.querySelector("#celBtn");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    const celciu = Math.round(data.main.temp);
    const flCelciu = Math.round(data.main.feels_like);

    document.querySelector(".city").innerHTML = data.name + " , " + data.sys.country;
    document.querySelector(".temp").innerHTML = celciu + "°C";
    document.querySelector(".fernh").innerHTML = (celciu *2)+ 30 +"°F";
    document.querySelector(".fl-temp").innerHTML = flCelciu + "°C";
    document.querySelector(".fl-fernh").innerHTML = (flCelciu *2)+ 30 +"°F";
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

function celcius() {
    fernh.style.display="none";
    temper.style.display="block";
    felFern.style.display="none";
    felTemp.style.display="block";
    celBtn.style.background="#fff";
    ferBtn.style.background="#ffffff5c";
}
function fernheight() {
    fernh.style.display="block";
    temper.style.display="none";
    felFern.style.display="block";
    felTemp.style.display="none";
    celBtn.style.background="#ffffff5c";
    ferBtn.style.background="#fff";
}
