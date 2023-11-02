let locationinput = document.getElementById('locationinput');
let weatherBtn = document.getElementById('weatherBtn');
let weatherInfo = document.getElementById('weatherInfo');

weatherBtn.addEventListener('click', showWeather);
function showWeather(){
    const location =locationinput.value
    fetch(`http://api.weatherapi.com/v1/current.json?key=ea81b25f85d84c64bd242448230111&q=${location}&aqi=no`)
    .then(respons=>respons.json())
    .then(data => {
        console.log(data)
        const weatherHtml = `<div class = 'weatherInfoContainer'>
        <div class ='namediv'>
        <h2>
        City: ${data.location.name}
        </h2>
        </div></br>

        <div class ='row1-2'>
        <div class ='row1'>
        <h4>
        Lat :(${data.location.lat})</br>
        Lon : (${data.location.lon})
        </h4>
       </div>
       <div class ='row2'>
        <h4>Temp :(${data.current.temp_c} c)</h4>
        <h4>Condition:${data.current.condition.text}</h4>
        </div>
        </div>
        </div>`

        weatherInfo.innerHTML=weatherHtml
    })
    .catch(error =>{
        weatherInfo.innerHTML= `Error : ${error.message}`
    })
};
