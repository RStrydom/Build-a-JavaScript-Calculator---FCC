var keys = document.querySelectorAll('kbd');
var display = document.querySelector('#calculator .screen input');
var operations = ['+', '-', '*', '/'];
var currentOperation = '';
var evalString = '';
var memory = '';

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function(event) {
        keyPress(this.dataset.key);
    });
}

function keyPress(key) {
  switch (key) {
    case 'CE':
      display.value = '';
      currentOperation = '';
      memory = '';
      break;
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
        if (currentOperation !== '' && currentOperation !== '=' && memory !== '') {
          evalString = new String(display.value + currentOperation + memory);
          display.value = eval(evalString.toString())
          memory = '';
        }
        currentOperation = key;
      break;
    default:
      if (currentOperation !== '=') {
        if (currentOperation !== '') {
          memory += key;
        } else {
          display.value += key;
        }
      } else {
        display.value = key;
        currentOperation = '';
      }

  }

}
