// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Predefined admin credentials
    const adminEmail = 'adminemail@gmail.com';
    const adminPassword = 'admin';

    // Check if entered credentials match the admin credentials
    if (email === adminEmail && password === adminPassword) {
        alert('Admin login successful! Redirecting to admin dashboard...');
        window.location.href = 'index.html'; // Redirect to admin dashboard
    } else {
        alert('Invalid email or password. Please try again.');
    }
});


// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert('Signup successful! Redirecting to homepage...');
            window.location.href = 'index.html'; // Redirect to index.html
        } else {
            alert('Passwords do not match. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});
