import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAz0TbcfTPNgWuazmSJe-6XPXzJXznlZSs",
  authDomain: "product-e3cd6.firebaseapp.com",
  projectId: "product-e3cd6",
  storageBucket: "product-e3cd6.appspot.com",
  messagingSenderId: "641772401038",
  appId: "1:641772401038:web:0005bb8544e34672a0b4df",
  measurementId: "G-696PLQJZN3"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase  