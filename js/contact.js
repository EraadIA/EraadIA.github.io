import firebase from "firebase/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBxbGVRhZyU5f8yikAoAvGbtvqGGvNOLVI",
    authDomain: "north-park-real-estate.firebaseapp.com",
    projectId: "north-park-real-estate",
    storageBucket: "north-park-real-estate.firebasestorage.app",
    messagingSenderId: "320806214593",
    appId: "1:320806214593:web:5e3550570194a81bf1ed40",
    measurementId: "G-QSLERHBK8B",
    databaseURL: "https://north-park-real-estate-default-rtdb.firebaseio.com"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit form
function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, phone, message);


    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}
  
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      message:message
    });
    console.log("Message saved to Firebase!"); 
  }