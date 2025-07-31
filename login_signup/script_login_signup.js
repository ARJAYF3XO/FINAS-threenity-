 const loginText = document.querySelector(".title-text .login");
        const loginForm = document.querySelector("form.login");
        const loginBtn = document.querySelector("label.login");
        const signupBtn = document.querySelector("label.signup");
        const signupLink = document.querySelector("form .signup-link a");

        // Get references to login form inputs
        const loginEmailInput = document.getElementById("loginEmail");
        const loginPasswordInput = document.getElementById("loginPassword");

        // Get references to signup form inputs
        const signupEmailInput = document.getElementById("signupEmail");
        const signupPasswordInput = document.getElementById("signupPassword");
        const signupConfirmPasswordInput = document.getElementById("signupConfirmPassword");

        // Function to validate email format
        const isValidEmail = (email) => {
            // Basic regex for email validation
            return /^[^s@]+@[^s@]+\.[^s@]+$/.test(email);
        };

        // --- Event Listeners for Tab Switching ---
        signupBtn.onclick = () => {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        };

        loginBtn.onclick = () => {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        };

        signupLink.onclick = () => {
            signupBtn.click();
            return false; // Prevent default link behavior
        };


        // Signup Form Submission
       
