document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".grid .card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
});