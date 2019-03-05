import './styles.css';
import { renderInput } from './components/inputElement';
import { updateOnInput, switchInputs } from './components/updateInput';
import { detect } from './components/detectDevice';

const Shake = require('shake.js');
const myShakeEvent = new Shake({ threshold: 4 });

(function() {
  const inputFields = [
    { 'First Name': {} },
    { 'Last Name': {} },
    { 'Company (Optional)': {} },
    { 'Street Number & Name': {} },
    { 'Delivery Remarks': {} },
    { City: {} },
    { Postcode: {} },
    { Phone: {} }
  ];

  for (let field in inputFields) {
    document.getElementById('app').innerHTML += renderInput(Object.keys(inputFields[field])[0]);
  }
  document.querySelectorAll('.floatInput').forEach(input => {
    input.addEventListener('keyup', updateOnInput);
  });

  // desktop demo shizzle
  document.querySelector('.switch').addEventListener('click', switchInputs);
  if (!detect()) {
    document.querySelector('.info').style.display = 'none';
    document.querySelector('.switch').style.display = 'block';
  }

  // mobile demo shizzle
  myShakeEvent.start();
  window.addEventListener('shake', () => {
    setTimeout(switchInputs, 100);
  });
})();
