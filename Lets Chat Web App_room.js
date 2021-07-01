  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDp2R5wEG0mKTU_cVNyaNLN-GjqRnxQ1XM",
      authDomain: "kwitter-abe5b.firebaseapp.com",
      databaseURL: "https://kwitter-abe5b-default-rtdb.firebaseio.com",
      projectId: "kwitter-abe5b",
      storageBucket: "kwitter-abe5b.appspot.com",
      messagingSenderId: "617963189176",
      appId: "1:617963189176:web:b4a90e1e1820e88c9d154d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML=" welcome "+user_name+" ! ";

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose:"adding user"
            });
          localStorage.setItem("room_name",room_name);
          window.location="Lets Chat Web App_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=  document.getElementById("output").innerHTML+row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
      window.location="Lets Chat Web App_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="Lets Chat Web App_page.html";
}