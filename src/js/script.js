// Add a simple animation effect to the button
const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
  button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseout', () => {
  button.style.transform = 'scale(1)';
});