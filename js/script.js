function openModal(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modal-message");

    modalMessage.innerHTML = message;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function handleSignup() {
    var signupForm = document.getElementById("signupForm");
    
    // Your additional validation or processing logic goes here
    
    // Submit the form
    signupForm.submit();
}

function handleLogin() {
    var loginForm = document.getElementById("loginForm");
    
    // Your additional validation or processing logic goes here
    
    // Submit the form
    loginForm.submit();
}
