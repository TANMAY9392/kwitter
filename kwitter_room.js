var firebaseConfig = {
      apiKey: "AIzaSyCyBC14RvM2Nd-R5TDIvFSfDwzaGtRQB40",
      authDomain: "kwitter-f1a1b.firebaseapp.com",
      databaseURL: "https://kwitter-f1a1b-default-rtdb.firebaseio.com",
      projectId: "kwitter-f1a1b",
      storageBucket: "kwitter-f1a1b.appspot.com",
      messagingSenderId: "76550242133",
      appId: "1:76550242133:web:09aea0c31c3ca1507fb9dc"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
 
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name );
      window.location = "kwitter_page.html";

}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}