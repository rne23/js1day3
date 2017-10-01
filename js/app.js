askForNameAndColor();

function askForNameAndColor(){
  var name = prompt('Please enter your name:');
  var color = prompt (`Please enter your favorite color. Possible options:
  red, orange, yellow, green, blue, pink, purple, black, white, or grey.
  Uppercase or lowercase are acceptable. No punctuation marks.`);
  color = color.toLowerCase();
  printNameAndColor(name, color);
}

function printNameAndColor(name, color) {
  validColors = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple',
  'black', 'white', 'grey'];
  if (validColors.includes(color) == true) {
    var str = 'Your name is ' + name + ' and your favorite color is ' + color +
    '.';
    alert(str)
    askForNameAndColor();
  } else {
    alert('Your name is ' + name + `. However, you did not enter an acceptable
color! Remember, the possible options are: red, orange, yellow, green, blue,
pink, purple, black, white, or grey.`);
    var askAgain = confirm('Would you like to try again?');
    if (askAgain == true) {
      askForNameAndColor();}
  }
}
