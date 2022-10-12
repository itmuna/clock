
      var hour = document.getElementById("hr");
      var minute = document.getElementById("mn");
      var seconds = document.getElementById("sc");
 
      var addClock = setInterval(function clock() {
         var date_now = new Date();
         var hr = date_now.getHours();
         var min = date_now.getMinutes();
         var sec = date_now.getSeconds();
 
         var calc_hr = hr * 30 + min / 2;
         var calc_min = min * 6;
         var calc_sec = sec * 6;
 
         hour.style.transform = "rotate(" + calc_hr + "deg)";
         minute.style.transform = "rotate(" + calc_min + "deg)";
         seconds.style.transform = "rotate(" + calc_sec + "deg)";
      
        }, 1000);

    