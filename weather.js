 var api = "http://api.wunderground.com/api/898609db2ff0c335/geolookup/conditions/q/";
 api = api + "CA/San_Francisco.json";

     if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}


    $(document).ready( function(){

     
  //beginning of ajax    
  $.ajax({
  type:"GET",
  url : api,
  dataType : "json",
  success : function(parsed_json) {
  var location = parsed_json.location.city;
  var temp = parsed_json.current_observation.temp_c;
  var feelsLike = parsed_json.current_observation.feelslike_c;
  
  document.getElementById("location").innerHTML = "location : " +  location;
  document.getElementById("temp").innerHTML = "temperature(celsius) : " + temp;
  document.getElementById("feelsLike").innerHTML = "feels more like : " + feelsLike; 
}//end of success function
  });//end of ajax
});//end of jquery
