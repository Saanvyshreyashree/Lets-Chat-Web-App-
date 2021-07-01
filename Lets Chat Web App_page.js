//YOUR FIREBASE LINKS
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
   room_name=localStorage.getItem("room_name");

   function send()
   {
         msg=document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
         });
         document.getElementById("msg").value="";

   }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

part1= "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
part2="<h4 class='message_h4'>"+message+"</h4>";
part3= "<button class='btn btn-warning' id="+firebase_message_id +" value="+like+" onclick='updateLike(this.id)'>";
part4="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button> <hr>";
final=part1+part2+part3+part4;
document.getElementById("output").innerHTML+=final;
//End code
    } });  }); }
getData();

function updateLike(message_id)
{
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
like:updated_likes
});
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}