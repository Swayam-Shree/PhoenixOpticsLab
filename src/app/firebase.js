import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyC0IF2lzDJQoygph6LUclJlHOTtJY9GMrY",
	authDomain: "phoenixopticslab.firebaseapp.com",
	projectId: "phoenixopticslab",
	storageBucket: "phoenixopticslab.appspot.com",
	messagingSenderId: "1007226330657",
	appId: "1:1007226330657:web:a263e2b549798ea8140d60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);