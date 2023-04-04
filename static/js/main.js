// For the responsive menu used on small screens (mobile devices)

const hamburgerBtn = document.querySelector('.hamburger');
const responsiveMenu = document.querySelector('.main-menu');

hamburgerBtn.addEventListener('click', tggle);

function tggle() {
  hamburgerBtn.classList.toggle('is-active');
  responsiveMenu.classList.toggle('show');
}


// Countdown timer for the BIG ONE

// Set the date we're counting down to
var countDownDate = new Date("Apr 21, 2023 00:08:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

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
  document.getElementById("countdown").innerHTML = `
    <div class="days"><b>${days}</b><span class="time-unit">days</span></div>
    <div class="hours"><b>${hours}</b>   <span class="time-unit">hrs</span></div>
    <div class="minutes"><b>${minutes} </b><span class="time-unit">mins</span></div>
    <div class="seconds"><b>${seconds}</b> <span class="time-unit">secs</span></div>
    `;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "It's started already";
  }
}, 1000);

/*
function shareMastodon() {
  // Prefill the form with the user's previously-specified Mastodon instance, if applicable
  var default_url = localStorage['mastodon_instance'];

  // If there is no cached instance/domain, then insert a "https://" with no domain at the start of the prompt.
  if (!default_url) default_url = 'https://msdn.social';

  var instance = prompt(
    "Enter your instance's address: (ex: https://social.linux.pizza/)",
    default_url
  );
  if (instance) {
    // Handle URL formats
    if (!instance.startsWith('https://') && !instance.startsWith('http://'))
      instance = 'https://' + instance;

    // Get the current page's URL
    var url = window.location.href;

    // Get the page title from the og:title meta tag, if it exists.
    var title = document
      .querySelectorAll('meta[property="og:title"]')[0]
      .getAttribute('content');

    // Otherwise, use the <title> tag as the title
    if (!title) var title = document.getElementsByTagName('title')[0].innerHTML;

    // Handle slash
    if (!instance.endsWith('/')) instance = instance + '/';

    // Cache the instance/domain for future requests
    localStorage['mastodon_instance'] = instance;

    // Hashtags
    hashtags = '#xrsheffield';

    // Tagging users, such as offical accounts or the author of the post
    var author = '@ExtinctionR@social.rebellion.global';

    // Create the Share URL
    // https://someinstance.tld/share?text=URL%20encoded%20text
    mastodon_url =
      instance +
      'share?text=' +
      encodeURIComponent(
        title + '\n\n' + url + '\n\n' + hashtags + ' ' + author
      );

    // Open a new window at the share location
    window.open(mastodon_url, '_blank');
  }
}

*/