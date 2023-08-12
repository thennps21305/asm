import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  // Thay đổi thông tin kết nối tới Firebase của bạn ở đây
  apiKey: "AIzaSyDAhd6RYKICaoqrpdGRDcfzTwCV9TSrwcU",
  authDomain: "react-c1ce8.firebaseapp.com",
  projectId: "react-c1ce8",
  storageBucket: "react-c1ce8.appspot.com",
  messagingSenderId: "1077131631396",
  appId: "1:1077131631396:web:b43d972f3d1f92a65571b1",
  measurementId: "G-H93M8TW3KT"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
