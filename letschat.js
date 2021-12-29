var firebaseConfig = {
  apiKey: "AIzaSyCoBfD6YQQm8ujEYfXdpldYe19UQj25K6k",
  authDomain: "let-s-chat-74aa0.firebaseapp.com",
  projectId: "let-s-chat-74aa0",
  storageBucket: "let-s-chat-74aa0.appspot.com",
  messagingSenderId: "1040482461758",
  appId: "1:1040482461758:web:637395322a48bd0848c96f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

welc_user = localStorage.getItem("Username");
document.getElementById("welc").innerHTML="Welcome "+welc_user+"!";

function addRoom(){
  room_name= document.getElementById("add").value;
  localStorage.setItem("Roomname", room_name);
  window.location="chat_place.html";
}