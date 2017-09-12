$(document).ready( function(){
var posLat, posLon, api;

     if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    //$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    posLat = position.coords.latitude;
    posLon = position.coords.longitude;
    api = "http://api.openweathermap.org/data/2.5/weather?lat=" + posLat + "&lon=" + posLon + "&appid=1af849e40d12a4e399adab335b4ed014";

$.getJSON(api, function(parsed_json){
  var tempK = parsed_json.main.temp;
  var tempC = Math.round((tempK - 273.15)*10)/10;
  var tempF = tempK*(9/5) - 459.67;
  var tempSwap = true;

  //console.log(name);
  //console.log(longtitude);
  document.getElementById("longtitude").innerHTML = "longtitude: " + parsed_json.coord.lon;
  document.getElementById("latitude").innerHTML = "latitude : " + parsed_json.coord.lat;
  document.getElementById("location").innerHTML = "location : " + parsed_json.name; 
  document.getElementById("temp").innerHTML = "celsius : " + tempC;
  document.getElementById("condition").innerHTML = "weather conditions : " + parsed_json.weather[0].description;

  $("#temp").click(function(){
    if(tempSwap === false){
      document.getElementById("temp").innerHTML = "farenheit : " + tempF;
      tempSwap = true;
    }
    else{
      document.getElementById("temp").innerHTML = "celsius : " + tempC;
      tempSwap = false;
    }
  });

});

  });
     }
});    
