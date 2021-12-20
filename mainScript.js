

var color = '#';
var letters = ['e97223', '2598c5', '883c1e', '507c4a', '919191', 'f3e8d1'];

color += letters[Math.floor(Math.random() * letters.length)];
document.getElementById('body').style.background = color;