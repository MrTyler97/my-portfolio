const form = document.getElementById("contact-form");

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
