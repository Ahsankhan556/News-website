// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLau_z63TcFb-ZZxZ26LChsOpdjd551tM",
  authDomain: "ahsan-cb020.firebaseapp.com",
  projectId: "ahsan-cb020",
  storageBucket: "ahsan-cb020.appspot.com",
  messagingSenderId: "663419459802",
  appId: "1:663419459802:web:d766a56b35e6e029fcade3",
  measurementId: "G-1WLZF6PMV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let adminame = document.getElementById("username");
let adminpassword = document.getElementById("password");


let title = document.getElementById("title");
let Description = document.getElementById("description");
let UploadImage = document.getElementById("image");
  