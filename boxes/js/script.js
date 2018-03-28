var colors = [
  '#C94C24',
  '#268802',
  '#C4226F',
  '#859835',
  '#6D73C2',
  '#37A198',
  '#DA3637',
  '#F0AD4E'
]


function makeBoxes(howMany) {
  var colorAmt = colors.length;
  var currColor = 0;
  var myElement;
  var myNode = document.querySelector('.boxes');

  for ( let i = 0; i < howMany; i++) {

    myElement = document.createElement('div');
    myElement.className = 'box';
    myElement.style = 'background-color: ' + colors[currColor];
    myNode.appendChild(myElement);

    myNode.addEventListener('click', function(e) {
      e.target.parentNode.removeChild(e.target);
    }, false);

    if (currColor === colorAmt - 1) {
      currColor = 0;
    } else {
      currColor++;
    }
  }
}

makeBoxes(20);
