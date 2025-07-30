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

        // --- Form Submission and Validation ---

        // Login Form Submission
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent default form submission

            const email = loginEmailInput.value.trim();
            const password = loginPasswordInput.value.trim();

            if (!email || !password) {
                alert("Please fill in all fields for login.");
                return;
            }

            if (!isValidEmail(email)) {
                alert("Please enter a valid email address for login.");
                return;
            }

            // If validation passes, redirect
            window.location.href = "../index.html";
        });

        // Signup Form Submission
        document.querySelector("form.signup").addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent default form submission

            const email = signupEmailInput.value.trim();
            const password = signupPasswordInput.value.trim();
            const confirmPassword = signupConfirmPasswordInput.value.trim();

            if (!email || !password || !confirmPassword) {
                alert("Please fill in all fields for signup.");
                return;
            }

            if (!isValidEmail(email)) {
                alert("Please enter a valid email address for signup.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // If validation passes, redirect
            window.location.href = "../index.html";
        });