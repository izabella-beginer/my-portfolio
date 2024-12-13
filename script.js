var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const form = document.getElementById('registerForm');

Form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting for now
    console.log('Form submitted!'); // Check if form submission is working
});

const Form = document.getElementById('contactForm');

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
