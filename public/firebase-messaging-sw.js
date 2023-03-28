/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');
   
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
  apiKey: "AIzaSyDYAkwnEOfcYiIZP2KzjuZIYUM10ujvuwc",
  authDomain: "getitnow-app.firebaseapp.com",
  projectId: "getitnow-app",
  storageBucket: "getitnow-app.appspot.com",
  messagingSenderId: "359419175780",
  appId: "1:359419175780:web:de08d5644ede8dc5d31071",
  measurementId: "G-HN63NY3SF6"
});
  
/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log(
//         "[firebase-messaging-sw.js] Received background message ",
//         payload,
//     );
//     /* Customize notification here */
//     const notificationTitle = "Background Message Title";
//     const notificationOptions = {
//         body: "Background Message body.",
//         icon: "/itwonders-web-logo.png",
//     };
  
//     return self.registration.showNotification(
//         notificationTitle,
//         notificationOptions,
//     );
// });