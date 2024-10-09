document.addEventListener("DOMContentLoaded", function() {
  const fakeButton = document.getElementById('fake');

  // Función para mover el botón a una nueva posición
  function moveButton() {
    const x = Math.random() * (window.innerWidth - fakeButton.clientWidth);
    const y = Math.random() * (window.innerHeight - fakeButton.clientHeight);
    fakeButton.style.position = 'absolute';
    fakeButton.style.left = `${x}px`;
    fakeButton.style.top = `${y}px`;
  }

  // Detecta cuando el mouse se acerca al botón "No"
  fakeButton.addEventListener('mouseover', moveButton);
});
