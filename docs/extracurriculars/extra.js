// 1) Carousel functionality (unchanged)
document.querySelectorAll(".media-carousel").forEach((carousel) => {
  const slides = carousel.querySelectorAll(".slide");
  let idx = 0;

  const show = (i) =>
    slides.forEach((s, j) => s.classList.toggle("active", j === i));

  carousel.querySelector(".next").addEventListener("click", () => {
    idx = (idx + 1) % slides.length;
    show(idx);
  });

  carousel.querySelector(".prev").addEventListener("click", () => {
    idx = (idx - 1 + slides.length) % slides.length;
    show(idx);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".media-section").forEach((section) => {
    const carousels = section.querySelectorAll(".media-carousel");
    if (carousels.length > 1) {
      // center the section heading
      const h1 = section.querySelector("h1");
      if (h1) h1.style.textAlign = "center";

      carousels.forEach((carousel) => {
        // find the very next <p> after this carousel
        const para = carousel.nextElementSibling;
        if (para && para.tagName.toLowerCase() === "p") {
          // create a flex wrapper
          const wrapper = document.createElement("div");
          wrapper.style.display = "flex";
          wrapper.style.alignItems = "center";
          wrapper.style.gap = "1.5rem";
          wrapper.style.marginBottom = "2rem";
          wrapper.style.padding = "1rem";

          // insert wrapper in place of the carousel
          section.insertBefore(wrapper, carousel);
          // move carousel + paragraph into it
          wrapper.appendChild(carousel);
          wrapper.appendChild(para);

          // force the carousel to sit left at fixed width
          carousel.style.flex = "0 0 600px";
          // allow text to fill remaining space
          para.style.flex = "1";
        }
      });
    }
  });
});
