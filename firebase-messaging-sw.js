
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyCaUvTFms4R8ufS4jxXw0M0AtAQ763RlMc",
  authDomain: "andystag25.firebaseapp.com",
  projectId: "andystag25",
  storageBucket: "andystag25.firebasestorage.app",
  messagingSenderId: "43167349544",
  appId: "1:43167349544:web:f3ec01160a0166fc2a6e1d",
  measurementId: "G-LJ54DX0R9Q"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload)=>{
  const title=(payload && payload.notification && payload.notification.title)||"Andy’s Stag Bingo";
  const options={ body:(payload && payload.notification && payload.notification.body)||'', icon:'/icon-192.png' };
  self.registration.showNotification(title, options);
});
