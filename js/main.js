/* global data */
/* exported data */

var $car = document.querySelector('#car');

function handleArrowKeys(event) {
  if (event.key === 'ArrowLeft') {
    $car.setAttribute('class', 'dir-left');
  } else if (event.key === 'ArrowRight') {
    $car.setAttribute('class', 'dir-right');
  } else if (event.key === 'ArrowUp') {
    $car.setAttribute('class', 'dir-up');
  } else if (event.key === 'ArrowDown') {
    $car.setAttribute('class', 'dir-down');
  }
}

document.addEventListener('keydown', handleArrowKeys);
