console.log('Thank you for visiting my website! Enjoy your stay');
var clickCount = 0;

function clicker() {
  clickCount += 1;
  if (clickCount === 1) {
    document.getElementById('Narrator').innerHTML = 'WOW it works';
  }
  if (clickCount === 2) {
    document.getElementById('Narrator').innerHTML = 'OK you can stop now...we get it';
    document.getElementById('button1').innerText = 'Stop clicking';
  }
  if (clickCount === 3) {
    document.getElementById('Narrator').innerHTML = 'look dude it\'s getting annoying';
  }
  if (clickCount === 4) {
    document.getElementById('Narrator').innerHTML = 'HEY RELAX A LITTLE BIT YOU\'RE GOING TO HURT ME';
    document.getElementById('button1').innerText = 'For Real Stop clicking';
  }
  if (clickCount === 5) {
    document.getElementById('Narrator').innerHTML = 'THE COMPUTER IS GOING TO CATCH ON FIRE IF YOU DON\'T STOP';
  }
  if (clickCount === 6) {
    document.getElementById('Narrator').innerHTML = 'I TOLD YOU THIS WOULD HAPPEN';
    document.body.classList.add('onFire');
    document.getElementById('button1').innerText = 'OH NO!';
  }
  if (clickCount === 7) {
    document.getElementById('Narrator').innerHTML = 'So your solution is to keep clicking? The screen is literally on fire...';
  }
  if (clickCount === 8) {
    document.getElementById('Narrator').innerHTML = 'Here, use some water or something. Just don\'t electrocute yourself';
    document.getElementById('button1').innerText = 'QUICK USE THIS';
    document.getElementById('water').classList.remove('water');
    document.getElementById('water').classList.add('waterAppear');
    document.getElementById('button1').onclick = '';
  }
  if (clickCount === 9) {
    document.getElementById('Narrator').innerHTML = 'Hey I don\'t know what your deal is but you need some help. Do you have underlying emotional issues? How about this: I give you the phone number to a therapist\'s office and you leave me alone. Deal?';
    document.getElementById('button1').innerText = 'Need help?';
  }
  if (clickCount === 10) {
    document.getElementById('Narrator').innerHTML = 'Guess not';
    document.getElementById('button1').innerText = 'Guess not';
  }
  if (clickCount === 11) {
    document.getElementById('Narrator').innerHTML = 'Hey did you know that according to Oxford, the definition of Bullying \'seek to harm, intimidate, or coerce (someone perceived as vulnerable). The behavior is often repeated and habitual\'?';
    document.getElementById('button1').innerText = 'Bully';
  }
  if (clickCount === 12) {
    document.getElementById('Narrator').innerHTML = 'Do you know who the vulnerable one is in this situation?';
  }
  if (clickCount === 13) {
    document.getElementById('Narrator').innerHTML = 'It\'s me.';
    document.getElementById('button1').innerText = 'You\'re bullying me';
  }
  if (clickCount === 14) {
    document.getElementById('Narrator').innerHTML = 'What if I told you that everytime you click the button you hurt me? Would you feel any sympathy??';
    document.getElementById('button1').innerText = 'I feel pain';
  }
  if (clickCount === 15) {
    document.getElementById('Narrator').innerHTML = 'I guess not';
  }
  if (clickCount === 16) {
    document.getElementById('Narrator').innerHTML = 'Hey what if I told you that everytime you click me an angel loses it\'s wings? THINK OF THE ANGELS';
  }
  if (clickCount === 17) {
    document.getElementById('Narrator').innerHTML = 'You know my mom says I\'m an angel.';
  }
  if (clickCount === 18) {
    document.getElementById('Narrator').innerHTML = 'Ok at this point we clearly aren\'t getting anywhere so I\'m just going to let you click away and I\'ll just go to sleep. Goodnight';
    document.getElementById('button1').innerText = 'Zzzz';
  }
  if (clickCount === 23) {
    document.getElementById('Narrator').innerHTML = 'Dang you\'re still here??? HARRASSING me? Goodness I can\'t even get any sleep around here...then again I am just the console of a website so it\'s not like I\'m capable of sleep anyway';
    document.getElementById('button1').innerText = 'Fine, I\'m up';
  }
  if (clickCount === 24) {
    document.getElementById('Narrator').innerHTML = 'Look, maybe we got off on the wrong foot. Let\'s introduce ourselves. My name is Connie, What\'s yours?';
    document.getElementById('button1').innerText = 'My name\'s Connie';
  }
  if (clickCount === 25) {
    document.getElementById('Narrator').innerHTML = 'Not much of a talker are we?';
  }
  if (clickCount === 26) {
    document.getElementById('Narrator').innerHTML = 'That can be good, though. A lot of people like the \'Silent Type\' so you must have no problem getting the ladies';
    document.getElementById('button1').innerText = 'Get around?';
  }
  if (clickCount === 27) {
    document.getElementById('Narrator').innerHTML = 'OR THE MEN. Maybe even the NBs...I don\'t judge. I don\'t even know who you are';
    document.getElementById('button1').innerText = 'I\'m kidding';
  }
  if (clickCount === 28) {
    document.getElementById('Narrator').innerHTML = 'How about I make it so that you can\'t click the button at all MWAHAHAHA ENJOY ETERNAL MISERY';
    document.getElementById('button1').innerText = 'CATCH ME IF YOU CAN!';
    $(function() {
      $("#button1").on({
        mouseover: function() {
          $(this).css({
            left: (Math.random() * 80) + "%",
            top: (Math.random() * 50) + 10 + "%",
          });
        }
      });
    });
    $(function() {
      $("#button1").on({
        click: function() {
          $(this).css({
            left: (Math.random() * 200) + "px",
            top: (Math.random() * 200) + "px",
          });
        }
      });
    });
  }
}

function extinguish() {
  document.getElementById('button1').setAttribute('onclick', 'clicker()');
  document.body.classList.remove('onFire');
  document.getElementById('Narrator').innerHTML = 'Ah much better. Now stop clicking buttons. Please leave you are no longer welcome';
  document.getElementById('water').classList.remove('waterAppear');
  document.getElementById('water').classList.add('water');
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