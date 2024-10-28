
// Menu toggle  handle js
// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');
    menu.addEventListener('click', function () {
        this.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');
    });
});


// Select all navigation links within the navbar
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});



// Contact form validation
let form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    // Retrieve and trim input values from the form
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let message = document.getElementById('message').value.trim();

    // Validate name: not empty, no digits, contains letters, not just special characters
    const isValidName = name !== "" && 
                        !/\d/.test(name) && 
                        !/^[^a-zA-Z]+$/.test(name) && 
                        !/^[.\\/]+$/.test(name);

    // Regular expression patterns for email and phone validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email pattern
    const phonePattern = /^\+?[0-9]{10,15}$/; // Phone number pattern (10-15 digits)

    // Get error and success message elements
    const ErrorMSg = document.getElementById('ErrorMsg'); // Element to display error messages
    const SuccessMSg = document.getElementById('SuccessMsg'); // Element to display success messages

    // Function to clear the error message after a delay
    function clearErrorMessage() {
        setTimeout(() => {
            ErrorMSg.textContent = ""; 
        }, 1500); 
    }


      if(name == '' || email == ' ' || phone == ' ' || message == ' '){
        ErrorMSg.textContent = "Please Fill All The Fields";
        clearErrorMessage();
        return;
    }

    
    // Validate the name input
    if (!isValidName) {
        ErrorMSg.textContent = "Please Enter a Valid Name"; 
        clearErrorMessage(); 
        return;
    }

    // Validate the email input
    if (!emailPattern.test(email)) {
        ErrorMSg.textContent = "Please Enter a Valid Email Address"; 
        clearErrorMessage(); // Call function to clear the message
        return; // Exit the function
    }
    // Validate the phone input
    if (!phonePattern.test(phone)) {
        ErrorMSg.textContent = "Please Enter a Valid Phone Number 10-15 digits"; 
        clearErrorMessage(); // Call function to clear the message
        return; // Exit the function
    }

    // Validate the message input
    if (message === "") {
        ErrorMSg.textContent = "Please Enter Your Message"; 
        clearErrorMessage(); // Call function to clear the message
        return; // Exit the function
    }

    // If all validations pass, show a success message
    SuccessMSg.textContent = `Data Submitted Successfully by ${name}`; // Display success message
    setTimeout(() => {
        SuccessMSg.textContent = "";
    }, 2000); 

    // Reset the form fields
    form.reset();
});



// typed js
var typed = new Typed(".typing-text", {
    strings: ["Backend Development", "frontend development", "web designing", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
