name = prompt('Please enter your name:');

color = prompt (`Please enter your favorite color. Possible options:
red, orange, yellow, green, blue, pink, purple, black, white, or grey.
Uppercase or lowercase are acceptable. No punctuation marks.`);

color = color.toLowerCase();

switch (color) {
  case 'red':
    alert('Your name is ' + name + ' and your favorite color is red.');
    break;
  case 'orange':
    alert('Your name is ' + name + ' and your favorite color is orange.');
    break;
  case 'yellow':
    alert('Your name is ' + name + ' and your favorite color is yellow.');
    break;
  case 'green':
    alert('Your name is ' + name + ' and your favorite color is green.');
    break;
  case 'blue':
    alert('Your name is ' + name + ' and your favorite color is blue.');
    break;
  case 'pink':
    alert('Your name is ' + name + ' and your favorite color is pink.');
    break;
  case 'purple':
    alert('Your name is ' + name + ' and your favorite color is purple.');
    break;
  case 'black':
    alert('Your name is ' + name + ' and your favorite color is black.');
    break;
  case 'white':
    alert('Your name is ' + name + ' and your favorite color is white.');
    break;
  case 'grey':
    alert('Your name is ' + name + ' and your favorite color is grey.');
    break;
  default:
    alert('Your name is ' + name + `. However, you did not enter an acceptable
color! Remember, the possible options are: red, orange, yellow, green, blue,
pink, purple, black, white, or grey.`);
    break;
}
