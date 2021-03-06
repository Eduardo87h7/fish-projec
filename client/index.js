/* eslint-disable no-console */
/* eslint-disable no-alert */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

console.log('webpack Prueba!!!');
// Defautl Parametros ES6/2015
const show = (m = 'Prueba de Webpack') => {
  alert(m);
};
show();

function resolveafter25seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('Calling an async function');
  const result = await resolveafter25seconds();
  console.log(result);
}

asyncCall();
