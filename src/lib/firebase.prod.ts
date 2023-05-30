import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from "./seed";

const config = {
  // rohan old firebase account
  // apiKey: "AIzaSyBIi_IoQuGvQvVfoGOPRTGAWd33E_tl8B8",
  // authDomain: "netflix-react-ts.firebaseapp.com",
  // projectId: "netflix-react-ts",
  // storageBucket: "netflix-react-ts.appspot.com",
  // messagingSenderId: "91952530947",
  // appId: "1:91952530947:web:ffcc6b659265c31c6eb036"
  apiKey: "AIzaSyCHd_6Qkxpjjl3CO5KKqN4taat6tWDaIVc",
  authDomain: "netflix-reactts.firebaseapp.com",
  projectId: "netflix-reactts",
  storageBucket: "netflix-reactts.appspot.com",
  messagingSenderId: "286409514529",
  appId: "1:286409514529:web:dc50746c4d72cee202cd60",
  measurementId: "G-8NXR8Q0Y9F",
};

// Initialize Firebase
const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
