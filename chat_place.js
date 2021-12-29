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

  function send(){
      roomname=localStorage.getItem("Roomname")
      user_name=localStorage.getItem("Username")
      message= document.getElementById("sendinp").value;
      document.getElementById("recieve").innerHTML=message;
      localStorage.setItem("Message", message);
      firebase.database().ref(roomname).push({
          name=user_name,
          message=message
      }) 
      document.getElementById("sendinp").value=" ";
  }