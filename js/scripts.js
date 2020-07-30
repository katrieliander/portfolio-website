console.log("Welcome, I'm happy you found your way to my portfolio site!")
function menuToggle () {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else   {
    x.className = 'navtoggle';
}
}
