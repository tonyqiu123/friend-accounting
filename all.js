

var prevScrollpos = window.pageYOffset
var nav = document.querySelector(".nav")
window.onscroll = function() {
    if (prevScrollpos > 100)  nav.classList.add('navDown')
    else  nav.classList.remove('navDown')
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      nav.style.transform = "unset"
    }
    else {
      nav.style.transform = "translateY(-125%)"
    }
    prevScrollpos = currentScrollPos;
}

var html = document.querySelector('html')

var burger = document.querySelector(".burger")
var burgerMobile = document.querySelector(".burgerMobile")
var navMobile = document.querySelector(".navMobile")
var blackBG = document.querySelector(".blackBG")

burger.onclick = function() {
    navMobile.style.transform = "unset"
    blackBG.style.opacity = "1"
    html.style.overflowY = "hidden"
}
burgerMobile.onclick = function() {
    navMobile.style.transform = "translateX(100%)"
    blackBG.style.opacity = "0"
    html.style.overflowY = "unset"
}

// video
var video = document.getElementById("welcome");
var playButton = document.querySelector(".playButton")
var progressBar = document.querySelector(".progressBar")

video.addEventListener("click", function() {
  console.log("wtf")
  if (video.paused) {
    video.play();
    playButton.style.opacity = "0"

  } else {
    video.pause();
    playButton.style.opacity = "1"
  }
});

video.addEventListener("timeupdate", function() {
    var percentage = (video.currentTime / video.duration) * 100
    progressBar.style.width = percentage + "%"
})

video.addEventListener("ended", function() {
    playButton.style.opacity = "1"
})

// form
document.querySelector(".contact-form").addEventListener('submit', function(event) {
  event.preventDefault()

  var response = grecaptcha.getResponse();
  if(response.length == 0) {
  } else {
    document.querySelector(".contact-form").submit()
  }
})
