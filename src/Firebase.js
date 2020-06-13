import firebase from "firebase"
import 'firebase/firestore';
import 'firebase/auth'
try{
 firebase.initializeApp({
  apiKey: "AIzaSyDwFbQtXL_1cUrJReHcPPBYlTgb0Wq7CX8",
  authDomain: "simauth.firebaseapp.com",
  databaseURL: "https://simauth.firebaseio.com",
  projectId: "simauth",
  storageBucket: "simauth.appspot.com",
  messagingSenderId: "169240016800",
  appId: "1:169240016800:web:72fc23425fc245232f16c5",
  measurementId: "G-NW3GJQ5YKH"
});
}catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack)

}}
// Initialize Firebase
 const Firebase=firebase
 export const firestore = firebase.firestore();



 


export default Firebase
