document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const loginButton = document.getElementById("login-button");
  
    const fixedEmail = "user@example.com";
    const fixedPassword = "password123";
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      errorMessage.style.display = "none"; // Hide error message
      loginButton.disabled = true; // Disable button
      loginButton.textContent = "Logging in...";
  
      setTimeout(() => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
  
        if (email === fixedEmail && password === fixedPassword) {
          alert("Login successful!");
          window.location.href = "/"; // Navigate to home page
        } else {
          errorMessage.textContent = "Invalid email or password.";
          errorMessage.style.display = "block"; // Show error message
        }
  
        loginButton.disabled = false; // Re-enable button
        loginButton.textContent = "Log In";
      }, 1000); // Simulate API delay
    });
  });
  