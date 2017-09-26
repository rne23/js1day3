name = prompt('Please enter your name:');
color = prompt (`Please enter your favorite color. Possible options:
red, orange, yellow, green, blue, pink, purple, black, white, or grey.
Uppercase or lowercase are acceptable. No punctuation marks.`);
color = color.toLowerCase()
if (color == ('red' || 'orange' || 'yellow' || 'green' || 'blue' || 'pink' ||
'purple' || 'black' || 'white' || 'grey')) {
  alert('Your name is ' + name + ' and your favorite color is ' + color + '.')
} else {
  alert('You did not enter your favorite color!')
}
