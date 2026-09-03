document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.art-card');

  // Aplica as posições "desconstruídas" iniciais com base nos atributos do HTML
  cards.forEach(card => {
    const rotation = card.getAttribute('data-rotation') || 0;
    const offsetX = card.getAttribute('data-offset-x') || 0;

    // Aplica a rotação e o deslocamento horizontal inicial
    card.style.transform = `rotate(${rotation}deg) translateX(${offsetX}px)`;
  });
});
