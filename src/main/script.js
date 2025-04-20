const navLinks = document.querySelectorAll("nav a");
const filters = document.querySelectorAll(".filters button");
const projectCards = document.querySelectorAll(".projects-container .project");
const form = document.getElementById("contact-form");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

filters.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    const filterValue = e.currentTarget.getAttribute("data-filter");
    projectCards.forEach((card) => {
      if (filterValue === "all" || card.classList.contains(filterValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formValues = Object.fromEntries(formData.entries());

  // Perform validation
  let isValid = true;
  Object.entries(formValues).forEach(([key, value]) => {
    if (value.trim() === "") {
      isValid = false;
      // Display an error message for the empty field
    }
  });

  if (isValid) {
    // Submit the form
    // You can use an AJAX request or other methods to handle form submission
    console.log("Form submitted successfully!");
    form.reset();
  }
});
