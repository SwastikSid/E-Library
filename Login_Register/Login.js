const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if username and password are valid
  if (username === 'myusername' && password === 'mypassword') {
    alert('Login successful!');
    // Redirect to another page here
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
