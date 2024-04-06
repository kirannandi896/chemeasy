import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
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
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(event){
  event.preventDefault();
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.history.back();
    alert("Login Sussessful!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });
})
