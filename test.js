$(document).ready( function(){
var posLat, posLon, temp;

     if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    //$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    posLat = position.coords.latitude;
    posLon = position.coords.longitude;
   var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + posLat + "&lon=" + posLon + "&appid=1af849e40d12a4e399adab335b4ed014";

$.getJSON(api, function(parsed_json){
  var longtitude = parsed_json.coord.lon;
  var latitude = parsed_json.coord.lat;
  var name = parsed_json.name;

  //console.log(name);
  //console.log(longtitude);
  //refer back to weather.html to change html elements to display api data
  document.getElementById("longtitude").innerHTML = "longtitude: " +  longtitude;
  document.getElementById("latitude").innerHTML = "latitude : " + latitude;
  document.getElementById("location").innerHTML = "location : " + name; 
});
  });
     }
});    
