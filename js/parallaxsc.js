
// create a listener for on scroll on the window
window.onscroll = function(){onScroll()};

function onScroll(){
  // get info for the math I want to get the percent of passing scroll across div
  var scrollLoc = window.pageYOffset;
  var divLoc = document.getElementById('parallax-scene').offsetTop;
  var divHeight = document.getElementById('parallax-scene').scrollHeight;
  var divPoint = divLoc / divHeight;
  var scrollPoint = scrollLoc / divHeight;

  // the percent passing the div.
  var percent = (scrollPoint - divPoint);

  // simple logs for testing
  console.log(percent);

  moveSun(percent);
  moveBG(percent);
  moveHill(percent);
}

// move sun
function moveSun(percent){
  // the amount the sun is going to move based in percentage
  var sunX = percent * 50;
  var sunY = percent * 100;
  var sunXunit = "" + sunX + "vh";
  var sunYunit = "" + sunY + "vh";
  document.getElementById('para-sun').style.marginLeft = sunXunit;
  document.getElementById('para-sun').style.marginTop = sunYunit;
}

function moveBG(percent){
  // the amount the bacground is going pan up in percentage
  var sunX = percent * 0;
  // order of operation, move backwards 200 percent then set pos
  var sunY = percent * -200 + -200;
  var sunXunit = "" + sunX + "vh";
  var sunYunit = "" + sunY + "vh";
  document.getElementById('para-background').style.marginLeft = sunXunit;
  document.getElementById('para-background').style.marginTop = sunYunit;
}

// limit this use of function and think about making one that accepts params instead of repeting this same logic.
function moveHill(percent){
  // the amount the sun is going to move based in percentage
  var sunX = percent * 40;
  var sunY = percent * 0 + 70;
  var sunXunit = "" + sunX + "vh";
  var sunYunit = "" + sunY + "vh";
  document.getElementById('para-hill').style.marginLeft = sunXunit;
  document.getElementById('para-hill').style.marginTop = sunYunit;
}