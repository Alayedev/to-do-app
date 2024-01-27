/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



export  class  nvironment{
    // Your web app's Firebase configuration
 firebaseConfig = {
    apiKey: "AIzaSyBCSEi5PPjPcLKI7RelX5vuo4E4bqoz_Lg",
    authDomain: "to-do-app-b7436.firebaseapp.com",
    projectId: "to-do-app-b7436",
    storageBucket: "to-do-app-b7436.appspot.com",
    messagingSenderId: "775714727448",
    appId: "1:775714727448:web:1824aeb87eb33a6b48c56d"
  };
  
  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
} */

export const environment = {
    production: false,
    firebaseConfig : {
        apiKey: "AIzaSyBCSEi5PPjPcLKI7RelX5vuo4E4bqoz_Lg",
        authDomain: "to-do-app-b7436.firebaseapp.com",
        projectId: "to-do-app-b7436",
        storageBucket: "to-do-app-b7436.appspot.com",
        messagingSenderId: "775714727448",
        appId: "1:775714727448:web:1824aeb87eb33a6b48c56d"
    }
};