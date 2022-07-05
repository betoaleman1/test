var firebaseConfig = {
    apiKey: "AIzaSyAwXfKirtAuBFD0nJ5YiIuiZvDDEKjd1E8",
    authDomain: "practica-501f4.firebaseapp.com",
    projectId: "practica-501f4",
    databaseURL: "https://practica-501f4-default-rtdb.firebaseio.com";
    storageBucket: "practica-501f4.appspot.com",
    messagingSenderId: "1053555886827",
    appId: "1:1053555886827:web:f38de5fa9746e121f8ccae",
    measurementId: "G-KT9WL9KHT9"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function agregar_usuario(){
    user_name=document.getElementById("nombre_de_usuario").value;
    firebase.database().ref("/").child(user_name).update({purpose:"agregar usuario"});
}