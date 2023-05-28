import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
    import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyAUoAcUSnOxUJK_RvQZpXIEUimyGOULg9o",
        authDomain: "nps-jsi09-9b9fe.firebaseapp.com",
        databaseURL: "https://nps-jsi09-9b9fe-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "nps-jsi09-9b9fe",
        storageBucket: "nps-jsi09-9b9fe.appspot.com",
        messagingSenderId: "341512619162",
        appId: "1:341512619162:web:ed8645d7eff740116b4b23",
        measurementId: "G-3K8YDGFWPD"
      };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
let signUp = document.getElementById('signUp');
        signUp.addEventListener('click',(e) => {

          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;


          createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid),{
        email:email,
      })
      alert('User created!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });
    });
