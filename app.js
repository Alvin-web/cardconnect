// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgMyPnzDZNqdFcYQIk8TvHlRE_A902Dto",
  authDomain: "login-page-2a442.firebaseapp.com",
  projectId: "login-page-2a442",
  storageBucket: "login-page-2a442.firebasestorage.app",
  messagingSenderId: "658102664868",
  appId: "1:658102664868:web:c1ee8257bc45f260c77031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event){
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        alert("Creating account...");
        window.location.href="login.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);  // Show error message
    });
});
