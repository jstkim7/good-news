(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  var cancelRAF = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;

  var goodNewsBar = document.getElementById("good-news");
  var closeButton = document.getElementById("close-good-news-bar");

  var y = -30;
  var requestId;

  function sayHello() {
    requestId = requestAnimationFrame(sayHello);
    goodNewsBar.style.top = y + "px";
    if (y < 0) {
      y+=2;
    } else {
      cancelRAF(requestId)
    }
  }

  sayHello();

  function sayGoodbye() {
    requestId = requestAnimationFrame(sayGoodbye);
    goodNewsBar.style.top = y + "px";
    if (y > -30) {
      y-=2;
    } else {
      cancelRAF(requestId)
    }
  }

  closeButton.onclick = function() {
    sayGoodbye();
  }
})();