var searchInput = document.getElementById("search-input");
var showdata = document.getElementById("data");

async function search() {
    var data = await axios.get("https://api.weatherapi.com/v1/current.json?key=9cab70a6bd814438adc43614233108&q=" + searchInput.value + "&aqi=no")
    let data2 = data.data.current;
    showdata.innerHTML = "<img src='" + data2.condition.icon + "' /> <h1>" + data2.condition.text + "</h1> <div class='feelhumi'><div class='feels'><p>FeelsLike</p><p>" + data2.feelslike_c + "°C</p></div><div class='humi'><p>Humidity</p><p>" + data2.humidity + "</p></div></div>"
}