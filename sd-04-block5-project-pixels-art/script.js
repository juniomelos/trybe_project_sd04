const blackColor = document.getElementById('black');
const colorOne = document.getElementById('color1');
const colorTwo = document.getElementById('color2');
const colorThree = document.getElementById('color3');
const clearBoard = document.getElementById('clear-board');
const pixelBoard = document.getElementsByClassName('pixel');

function randomColor() {
  const hexa = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += hexa[Math.floor(Math.random() * 16)];
  }
  return color;
}

blackColor.style.backgroundColor = 'black';
colorOne.style.backgroundColor = randomColor();
colorTwo.style.backgroundColor = randomColor();
colorThree.style.backgroundColor = randomColor();

clearBoard.addEventListener('click', function () {
  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].style.background = 'white';
  }
});

function saveColor(n) {
  const color = n;
  localStorage.removeItem('color');
  localStorage.setItem('color', color);
}

window.onload = function () {
  saveColor('black');
  blackColor.className = 'color selected';
};

const colors = document.getElementsByClassName('color');
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function () {
    for (let j = 0; j < colors.length; j += 1) {
      colors[j].classList.remove('selected');
    }
    colors[i].classList.add('selected');
  });
}

const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function () {
    const selectedColor = document.querySelector('.selected');
    const colorsSelected = selectedColor.style.backgroundColor;
    pixels[i].style.backgroundColor = colorsSelected;
  });
}

const generateBoard = document.getElementById('generate-board');

generateBoard.addEventListener('click', function () {
  let n = document.getElementById('board-size').value;
  if (n < 5) n = 5;
  if (n > 50) n = 50;

  document.getElementById('pixel-board').innerHTML = '';
  for (let i = 0; i < n; i += 1) {
    const trPixel = document.createElement('tr');
    trPixel.classList.add('linha');
    for (let j = 0; j < n; j += 1) {
      const tdPixel = document.createElement('td');
      tdPixel.classList.add('pixel');
      trPixel.appendChild(tdPixel);
    }

    document.getElementById('pixel-board').appendChild(trPixel);
    for (let k = 0; k < pixels.length; k += 1) {
      pixels[k].addEventListener('click', function () {
        const selectedColor = document.querySelector('.selected');
        const colorsSelected = selectedColor.style.backgroundColor;
        pixels[k].style.backgroundColor = colorsSelected;
      });
    }
  }
});
