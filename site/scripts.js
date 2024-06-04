// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ0ZGZ8qGK03aX7xFPQj2dSFvTSbNvwWE",
  authDomain: "forthegirls-c4ef4.firebaseapp.com",
  projectId: "forthegirls-c4ef4",
  storageBucket: "forthegirls-c4ef4.appspot.com",
  messagingSenderId: "661727640182",
  appId: "1:661727640182:web:9d38567400b66fcd093d57",
  measurementId: "G-L84HD9Z1XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function calculateWPK() {
    console.log("Button clicked");
    const power = document.getElementById('power').value;
    const weight = document.getElementById('weight').value;
    
    console.log("Power:", power);
    console.log("Weight:", weight);

    if (power && weight) {
        const ftp = power;
        const wpk = (power / weight).toFixed(2);

        document.getElementById('ftpResult').textContent = `Your FTP is: ${ftp} Watts`;
        document.getElementById('wpkResult').textContent = `Your WPK is: ${wpk} W/kg`;
    } else {
        alert('Please enter both your FTP and weight.');
    }
}

console.log("scripts.js is loaded");
