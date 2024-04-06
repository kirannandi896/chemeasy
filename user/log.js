import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {getAuth, signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCps1CxkArftXYRrt-h-_FmuQSYF2Rykv8",
  authDomain: "chemeasy-19ef3.firebaseapp.com",
  projectId: "chemeasy-19ef3",
  storageBucket: "chemeasy-19ef3.appspot.com",
  messagingSenderId: "125030168696",
  appId: "1:125030168696:web:2d29047d8f9eb9aa13d58d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, function (user) {
    if (user) {
        const currentUser = auth.currentUser;
        document.getElementById("userEmail").textContent = currentUser.email;
        document.getElementById("userName2").textContent = currentUser.displayName;
        document.getElementById("userProfilePicture2").src = currentUser.photoURL;
    } else {
        window.location.href = "../index.html";
    }
});

const logout = document.getElementById("logout");
logout.addEventListener("click", function (event) {
    event.preventDefault();
    signOut(auth).then(
        function () {
            alert("Logging out...");
            window.location.href = "../index.html";
        }
    ).catch(function () {
        alert("Error, can't logout...");
    });
});