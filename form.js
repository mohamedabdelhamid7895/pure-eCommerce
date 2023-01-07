// get the form element
const form = document.getElementById('registration-form');

// get the full name, password, and email elements
const fullName = document.getElementById('full-name');
const password = document.getElementById('password');
const email = document.getElementById('email');

// get the error message elements
const fullNameError = document.getElementById('full-name-error');
const passwordError = document.getElementById('password-error');
const emailError = document.getElementById('email-error');

// add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // prevent the default form submission
  event.preventDefault();

  // validate the form
  if (validateForm()) {
    // submit the 
    form.submit();
  }
});

// create a function to validate the

function validateForm() {
  fullNameError.textContent = '';
  passwordError.textContent = '';
  emailError.textContent = '';

  let isValid = true;

  // validate the full name
  if (fullName.value.trim() === '') {
    fullNameError.textContent = 'Please enter your full name';
    isValid = false;
  }

  // validate the password
  if (password.value.trim() === '') {
    passwordError.textContent = 'Please enter your password';
    isValid = false;
  } else if (password.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    isValid = false;
  }

  // validate the email
  if (email.value.trim() === '') {
    emailError.textContent = 'Please enter your email';
    isValid = false;
  } else if (!isEmailValid(email.value)) {
    emailError.textContent = 'Please enter a valid email';
    isValid = false;
  }

  return isValid;
}

// create a function to validate the email
function isEmailValid(email) {
  // regular expression to match the email pattern
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // test the email against the regular expression
  return regex.test(email);
}