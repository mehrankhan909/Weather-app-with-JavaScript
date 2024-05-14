const ApiKey = "fe8196794673ec86b5de32270fab1982";
const URL = "https://api.openweathermap.org/data/2.5/weather?q=";



const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", async ()=>{
    document.querySelector("p").classList.remove("yes");
    document.querySelector("p").classList.add("none");
    if(input.value == ""){
        alert("Please enter a valid city name");
        return;
    }
    try{
    const city = input.value;
    const url = URL + `${city}&appid=${ApiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.weather[0].main == "Clear"){
        document.querySelector("img").src = "/images/clear.png";
    }
    else if(data.weather[0].main == "Clouds"){
        document.querySelector("img").src = "/images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector("img").src = "/images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        document.querySelector("img").src = "/images/snow.png";
    }
    else if(data.weather[0].main == "Mist"){
        document.querySelector("img").src = "/images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector("img").src = "/images/drizzle.png";
    }
    const addingtocity = document.querySelector(".city").innerHTML = data.name;
    const temp = document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
    const humid = document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    const wind = document.querySelector(".winding").innerHTML = data.wind.speed + "-km/h";
    document.getElementById("nones").classList.add("yes");
    document.getElementById("nones").classList.remove("none");

}
catch(err){
    document.getElementById("nones").classList.add("none");
    document.getElementById("nones").classList.remove("yes");
    document.querySelector("p").classList.remove("none");
    document.querySelector("p").classList.add("yes");
}
})
input.addEventListener("click",()=>{
    input.value = "";
    document.querySelector("p").classList.remove("yes");
    document.querySelector("p").classList.add("none");
})
input.addEventListener("keypress",(key)=>{
    if(key.key=="Enter"){
        button.click();
    }
})
