// Set the date we're counting down to
var countDownDate = new Date('Apr 21, 2023 00:08:00').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById('countdown').innerHTML = `
    <div class="days"><b>${days}</b><span class="time-unit">days</span></div>
    <div class="hours"><b>${hours}</b>   <span class="time-unit">hrs</span></div>
    <div class="minutes"><b>${minutes} </b><span class="time-unit">mins</span></div>
    <div class="seconds"><b>${seconds}</b> <span class="time-unit">secs</span></div>
    `;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = "It's started already";
  }
}, 1000);
