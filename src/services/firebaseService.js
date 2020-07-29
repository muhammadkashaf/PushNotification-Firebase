import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHMvKPB1uPffEiwBzR4b5xE7Vh42PcUXA",
  authDomain: "notification-fb2c6.firebaseapp.com",
  databaseURL: "https://notification-fb2c6.firebaseio.com",
  projectId: "notification-fb2c6",
  storageBucket: "notification-fb2c6.appspot.com",
  messagingSenderId: "1005297680641",
  appId: "1:1005297680641:web:9ff89e699ede527680db00",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("TOKEN");
            console.log(currentToken);
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}
