import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAhTqhi76RR9XIRelIyc8jNe48FHgIgYJU",
  authDomain: "modarural-escottomichael.firebaseapp.com",
  projectId: "modarural-escottomichael",
  storageBucket: "modarural-escottomichael.appspot.com",
  messagingSenderId: "992683997059",
  appId: "1:992683997059:web:bb06409b565814e18228b6"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
