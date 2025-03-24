const gridContainer = document.getElementById('grid-container');
const colors = ['#FFFFFC', '#FFC6FF', '#BDB2FF', '#A0C4FF', '#9BF6FF', '#FFADAD', '#CAFFBF', '#FDFFB6','#FFD6A5','#E4C1F9'];
let currentColorIndex = 0;

// Create 8x4 grid
for (let i = 0; i < 32; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.width =box.style.height;
  box.addEventListener('click', () => {
    box.style.backgroundColor = colors[currentColorIndex];
    box.animate([
      { transform: 'scale(1)', opacity: '1' },
      { transform: 'scale(0.5)', opacity: '0.5' },
      { transform: 'scale(1)', opacity: '1' }
    ], {
      duration: 500,
      iterations: 1
    });
    box.style.opacity = '1';
  });
  gridContainer.appendChild(box);
}

// Function to change the color option
function changeColor() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Add event listener to the button
const colorChangeButton = document.getElementById('button');
colorChangeButton.addEventListener('click', changeColor);