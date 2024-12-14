const accordions= document.querySelector(".accordion");
var i;

accordions.forEach(button =>)
  button.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  document.getElementById('dark-mode-toggle').addEventListener('click', function() {
     document.body.classList.toggle('dark-mode');
     });
  
const form = document.getElementById('contactForm');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
});
form.addEventListener('submit', function(event) {
  // Clear any previous error messages
  nameError.textContent = '';

  if (nameInput.value.trim() === '') {
      nameError.textContent = 'Please enter your name';
      event.preventDefault(); // Prevent form submission
  }
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
