(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "08/01/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's Trials Today";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
(function () {
  const second1 = 1000,
        minute1 = second1 * 60,
        hour1 = minute1 * 60,
        day1 = hour1 * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today1 = new Date(),
      dd1 = String(today1.getDate()).padStart(2, "0"),
      mm1 = String(today1.getMonth() + 1).padStart(2, "0"),
      yyyy1 = today1.getFullYear(),
      nextYear1 = yyyy1 + 1,
      dayMonth1 = "10/15/",
      birthday1 = dayMonth1 + yyyy1;
  
  today1 = mm1 + "/" + dd1 + "/" + yyyy1;
  if (today1 > birthday1) {
    birthday1 = dayMonth1 + nextYear1;
  }
  //end
  
  const countDown1 = new Date(birthday1).getTime(),
      x1 = setInterval(function() {    

        const now1 = new Date().getTime(),
              distance1 = countDown1 - now1;

        document.getElementById("days1").innerText = Math.floor(distance1 / (day1)),
          document.getElementById("hours1").innerText = Math.floor((distance1 % (day1)) / (hour1) + 1),
          document.getElementById("minutes1").innerText = Math.floor((distance1 % (hour1)) / (minute1)),
          document.getElementById("seconds1").innerText = Math.floor((distance1 % (minute1)) / second1);

        //do something later when date is reached
        if (distance1 < 0) {
          document.getElementById("headline1").innerText = "It's HSC!";
          document.getElementById("countdown1").style.display = "none";
          document.getElementById("content1").style.display = "block";
          clearInterval(x1);
        }
        //seconds
      }, 0)
  }())
(function () {
            const second2 = 1000,
                minute2 = second2 * 60,
                hour2 = minute2 * 60,
                day2 = hour2 * 24;

            //I'm adding this section so I don't have to keep updating this pen every year :-)
            //remove this if you don't need it
            let today2 = new Date(),
                dd2 = String(today2.getDate()).padStart(2, "0"),
                mm2 = String(today2.getMonth() + 1).padStart(2, "0"),
                yyyy2 = today2.getFullYear(),
                nextYear2 = yyyy2 + 1,
                dayMonth2 = "11/08/",
                birthday2 = dayMonth2 + yyyy2;

            today2 = mm2 + "/" + dd2 + "/" + yyyy2;
            if (today2 > birthday2) {
                birthday2 = dayMonth2 + nextYear2;
            }
            //end

            const countDown2 = new Date(birthday2).getTime(),
                x2 = setInterval(function() {

                    const now2 = new Date().getTime(),
                        distance2 = countDown2 - now2;

                    document.getElementById("days2").innerText = Math.floor(distance2 / (day2)),
                        document.getElementById("hours2").innerText = Math.floor((distance2 % (day2)) / (hour2)+ 1),
                        document.getElementById("minutes2").innerText = Math.floor((distance2 % (hour2)) / (minute2)),
                        document.getElementById("seconds2").innerText = Math.floor((distance2 % (minute2)) / second2);

                    //do something later when date is reached
                    if (distance2 < 0) {
                        document.getElementById("headline2").innerText = "It's the End of HSC!";
                        document.getElementById("countdown2").style.display = "none";
                        document.getElementById("content2").style.display = "block";
                        clearInterval(x2);
                    }
                    //seconds
                }, 0)
        }())