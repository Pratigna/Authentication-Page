      // Import the functions you need from the SDKs you need
      
      
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
      import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

      

      const firebaseConfig = {
        apiKey: "AIzaSyBKbkpsG-gIqXIXdccZcRaWXDuexk90Pi8",
        authDomain: "taskchef-7dcd3.firebaseapp.com",
        projectId: "taskchef-7dcd3",
        storageBucket: "taskchef-7dcd3.appspot.com",
        messagingSenderId: "894160286270",
        appId: "1:894160286270:web:f78b78b56b9da1f690176f",
        measurementId: "G-GCV0NMP0TW",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const auth = getAuth(app);




// listen for auth status changes
auth.onAuthStateChanged(user=>{
  if(user){
    console.log('user logged in:', user);
    setupUI(user);
   
  }else{
    window.addEventListener('load', () => {
      window.location.replace("index.html");
    });
    console.log('user logged out:', user);
    setupUI();
    
  
  }
})
auth.onAuthStateChanged(user=>{
  if(user){

    
    setupUName(user);
   
  }else{
    window.addEventListener('load', () => {
      if (window.location.pathname === '/kanban.html' && !auth.currentUser) {
        window.location.replace("index.html");
      }
    });
    setupUName();
    
  
  }
})


     
     
     //signup

    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // get user info
      const Name = signupForm['signup-name'].value;
      const email = signupForm['signup-email'].value;
      const password = signupForm['signup-password'].value;
    
      // Firebase authentication code
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: Name
          });
    
      
          const modal = document.querySelector('#modal-signup');
          M.modal.getInstance(modal).close();
          signupForm.reset();
          
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        
        });    
    }); 



//logout

 const logout = document.querySelector('#logout');
 logout.addEventListener('click', (e) => {
   e.preventDefault();
   auth.signOut().then(() =>{
    window.location = 'index.html'
   }).catch((error)=>{
    console.log(error);
   })
 })





    //login
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();

      //get user info
       // get user info
       const email = loginForm['login-email'].value;
       const password = loginForm['login-password'].value;

       signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location = 'index.html'

    // close the modal
    const modal = document.querySelector('#modal-login');
          M.modal.getInstance(modal).close();
          loginForm.reset();
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
    })


    const resetPass = document.querySelector('#reset');
    resetPass.addEventListener('click', (e)=>{
      e.preventDefault();
       // get user info
       const email = loginForm['login-email'].value;

       sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    alert('Reset link sent to your email id');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }) 
