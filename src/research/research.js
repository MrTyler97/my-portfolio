document.querySelectorAll(".media-carousel").forEach((carousel) => {
  const slides = carousel.querySelectorAll(".slide");
  let idx = 0;

  const show = (i) => {
    slides.forEach((s, j) => {
      s.classList.toggle("active", j === i);
    });
  };

  carousel.querySelector(".next").addEventListener("click", () => {
    idx = (idx + 1) % slides.length;
    show(idx);
  });

  carousel.querySelector(".prev").addEventListener("click", () => {
    idx = (idx - 1 + slides.length) % slides.length;
    show(idx);
  });
});
