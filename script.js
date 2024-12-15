function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


const accordions= document.querySelector(".accordion");
var i;

accordions.forEach(button => )
  button.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  
  
const form = document.getElementById('contactForm');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(event) {
    let isValid=true;
   
});
form.addEventListener('submit', function(event) {
  // Clear any previous error messages
  nameError.textContent = '';

  if (nameInput.value.trim() === '') {
      nameError.textContent = 'Please enter your name';
      isValid=false;
  }
      if (!isValid){
      event.preventDefault(); // Prevent form submission
  }
});



const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        projects.forEach(project => {
            if (project.getAttribute('data-category') === category || category === 'all') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

