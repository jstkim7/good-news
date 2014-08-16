(function() {
  //necessary evil
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  var cancelRAF = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;

  // Grab the interactive DOMs
  var goodNewsBar = document.getElementById("good-news");
  var closeButton = document.getElementById("close-good-news-bar");

  // Initialization
  var y = -30;
  var requestId;

  // Opens the bar
  function sayHello() {
    requestId = requestAnimationFrame(sayHello);
    goodNewsBar.style.top = y + "px";
    if (y < 0) {
      y+=2;
    } else {
      cancelRAF(requestId)
    }
  }

  // Open the bar
  sayHello();


  // Closes the bar
  function sayGoodbye() {
    requestId = requestAnimationFrame(sayGoodbye);
    goodNewsBar.style.top = y + "px";
    if (y > -30) {
      y-=2;
    } else {
      cancelRAF(requestId)
    }
  }

  // Close the bar on click
  closeButton.onclick = function() {
    sayGoodbye();
  }
})();