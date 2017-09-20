$(document).ready( function(){
var posLat, posLon, api;//initialize variables 

     if (navigator.geolocation) {//if longtitude and latitude is found 
  navigator.geolocation.getCurrentPosition(function(position) {
    //$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    posLat = position.coords.latitude;
    posLon = position.coords.longitude;
    api = "http://api.openweathermap.org/data/2.5/weather?lat=" + posLat + "&lon=" + posLon + "&appid=1af849e40d12a4e399adab335b4ed014";
     
$.getJSON(api, function(parsed_json){
  var tempK = parsed_json.main.temp;
  var tempC = Math.round((tempK - 273.15)*10)/10;//to round to the nearest decmial place
  var tempF = Math.round((tempK*(9/5) - 459.67)*10)/10;//to convert from kelvin to farenheit and then to round to nearest decimal
  var tempSwap = true;//to set tempswap boolean false so that user can alternate between celsius and farenheit
  
  //console.log(name);
  //console.log(longtitude);
  document.getElementById("longtitude").innerHTML = "longtitude: " + parsed_json.coord.lon;
  document.getElementById("latitude").innerHTML = "latitude : " + parsed_json.coord.lat;
  document.getElementById("location").innerHTML = "location : " + parsed_json.name; 
  document.getElementById("temp").innerHTML = "celsius : " + tempC + " &#8451;";//to display the celsius symbol
  document.getElementById("condition").innerHTML = "weather conditions : " + parsed_json.weather[0].description;
  document.getElementById("wind").innerHTML = "wind speed : " + parsed_json.wind.speed;//display windspeed 

  $("#temp").click(function(){//if user clicks on temp button
    if(tempSwap === false){
      document.getElementById("temp").innerHTML = "farenheit : " + tempF + " &#8457;";//to display the farenheit symbol
      tempSwap = true;
    }
    else{
      document.getElementById("temp").innerHTML = "celsius : " + tempC + " &#8451;";
      tempSwap = false;
    }
  });
//create new date object 
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var utc = d.toUTCString();
//document.getElementById("date").innerHTML = days[d.getDay()];
document.getElementById("date").innerHTML = utc;

});//end of getJSON

  });
     }
});   
