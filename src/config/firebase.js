import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDyW4YuF99xOs9JO00o8Ew0nfGCWtl7OHs",
  authDomain: "react-gallery-6bba0.firebaseapp.com",
  databaseURL: "https://react-gallery-6bba0.firebaseio.com",
  projectId: "react-gallery-6bba0",
  storageBucket: "react-gallery-6bba0.appspot.com",
  messagingSenderId: "434282223593",
  appId: "1:434282223593:web:e27ce1750ce86fb8a31d78",
};
firebase.initializeApp(firebaseConfig);
export default firebase;