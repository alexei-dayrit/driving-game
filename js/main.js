/* global data */
/* exported data */

var $car = document.querySelector('#car');

function handleArrowKeys(event) {
  if (event.key === 'ArrowLeft') {
    $car.setAttribute('class', 'dir-left');
    data.direction = 'left';
  } else if (event.key === 'ArrowRight') {
    $car.setAttribute('class', 'dir-right');
    data.direction = 'right';
  } else if (event.key === 'ArrowUp') {
    $car.setAttribute('class', 'dir-up');
    data.direction = 'up';
  } else if (event.key === 'ArrowDown') {
    $car.setAttribute('class', 'dir-down');
    data.direction = 'down';
  }
}

document.addEventListener('keydown', handleArrowKeys);
