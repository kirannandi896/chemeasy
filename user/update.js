import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

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

const user = auth.currentUser;

function updateUserProfile(user){
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoURL;
  console.log(userEmail);

  document.getElementById("userName").textContent = userName;
  document.getElementById("userName").href = "user/logged.html";
  try {
    document.getElementById("userNameinter").textContent = userName;
    document.getElementById("userNameinter").href = "../user/logged.html";
    console.log("This is content of this website.")
  } catch (error) {
    console.log("This is main type webpage.")
  }
  document.getElementById("userEmail").textContent = userEmail;
  document.getElementById("userProfilePicture").style.display = "block";
  document.getElementById("userProfilePicture").src = userProfilePicture;
  console.log("© 2024 ChemEasy | All rights reserved.")
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    updateUserProfile(user);
    const uid = user.uid;
    return uid;
  } else {
    console.log("No user is signed in.");
    // alert("Create Account and Login");
    // window.location.href = "register.html";
  }
})