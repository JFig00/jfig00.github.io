console.log('Thank you for visiting my website! Enjoy your stay');

function dateTime() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  console.log(today);
}

function modeSwitch() {
  var dark = document.getElementById('dMode');
  if (dark.classList.contains('fa-moon-o')) {
    dark.classList.remove('fa-moon-o');
    dark.classList.add('fa-sun-o');
    document.body.className = 'lightMode';
  } else {
    dark.classList.remove('fa-sun-o');
    dark.classList.add('fa-moon-o');
    document.body.className = 'darkMode';
  }
}