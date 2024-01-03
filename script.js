function validateForm() {
    const username = document.getElementById('username').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const college = document.getElementById('college').value;
  
    // Regular expression for validating email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Regular expression for validating 10-digit mobile number
    const mobilePattern = /^[0-9]{10}$/;
  
    // Validation for mobile number
    const mobileError = document.getElementById('mobileError');
    if (!mobilePattern.test(mobile)) {
      mobileError.textContent = 'Please enter a valid 10-digit mobile number';
    } else {
      mobileError.textContent = '';
    }
  
    // Validation for email
    const emailError = document.getElementById('emailError');
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Invalid email format';
    } else {
      emailError.textContent = '';
    }
  
    // Check if all fields are filled with valid inputs
    if (username.trim() !== '' && mobilePattern.test(mobile) && emailPattern.test(email) && college.trim() !== '') {
      showMessage('Registration successful!', 'green');
      clearForm();
    } else {
      showMessage('Please fill in all fields with valid inputs', 'red');
    }
  }
  
  function showMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.style.color = color;
    messageElement.textContent = message;
  }
  
  function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('email').value = '';
    document.getElementById('college').value = '';
  }