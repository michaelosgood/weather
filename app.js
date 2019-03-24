// Clock Function
(function () {
    var clockElement = document.getElementById("clock");
    function updateClock(clock) {
      clock.innerHTML = new Date().toLocaleTimeString();
    }
    setInterval(function() {
        updateClock(clockElement);
    }, 1000);
  }());
  
   
  //Open Weather  
  var mykey = '5e68d3fec5ccfb64ad77db9dcbc833c7';
  var search = "";
  var callBackResponse = "";
  
  
  $("#submit-id").click(function(){
    event.preventDefault();
    getWeather();
  })
  
    function getWeather(){
      search = $("#search").val();
      var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+search+"&units=imperial&appid=" + mykey;
  
      // Here we run our AJAX call to the OpenWeatherMap API
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // We store all of the retrieved data inside of an object called "response"
        .done(function(response) {
          
          // Log the queryURL
          console.log(queryURL);
  
          // Log the resulting object 
          console.log(response);
  
          // Transfer content to HTML
          $(".city").html("City: " + response.name);
          $(".country").html("Country: "+response.sys.country);
          $(".humidity").html("Humidity: "+response.main.humidity+" %");
          $(".temp").html("Temperature: "+response.main.temp+" &#x2109");
          $(".skies").html("Skies: "+response.weather[0].description);
          $(".wind").html("Wind Speed: "+response.wind.speed+" MPH");
  
          // Console logging the the return
          console.log("City: " + response.name);
          console.log("Country: "+response.sys.country);
          console.log("Current Humidity:" + response.main.humidity+" %");
          console.log("Current Temperature: " + response.main.temp+" &#x2109");
          console.log("Skies: "+response.weather[0].description);
  
          cbHandler(response);
        });
  
    }
  
    function cbHandler(weatherDetails){
      callBackResponse = weatherDetails;
    }