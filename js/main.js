var $car = document.querySelector('#car');

var data = {
  direction: 'right',
  xCoord: 0,
  yCoord: 0
};

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

function moveCar(event) {
  if (event.which === 32) {
    data.xCoord += 10;
    $car.style.left = data.xCoord + 'px';
  } // setInterval
}

document.addEventListener('keydown', moveCar);

document.addEventListener('keydown', handleArrowKeys);
