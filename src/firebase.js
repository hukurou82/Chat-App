import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOg6HIF9qIoCck_q20ZRchedaA0yisH6o",
  authDomain: "chat-app-40a51.firebaseapp.com",
  databaseURL: "https://chat-app-40a51-default-rtdb.firebaseio.com",
  projectId: "chat-app-40a51",
  storageBucket: "chat-app-40a51.appspot.com",
  messagingSenderId: "954139325574",
  appId: "1:954139325574:web:e5e6671c81facbe837cd07",
  measurementId: "G-RF9FHCFQTT",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
