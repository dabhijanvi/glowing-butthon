const button = document.getElementById('glowBtn');

button.addEventListener('click', () => {
  button.classList.add('clicked');
  setTimeout(() => button.classList.remove('clicked'), 300);
});
