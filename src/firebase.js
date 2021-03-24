'use strict'

// import firebase from "firebase";
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Initialize Firebase
firebase.initializeApp({
	apiKey: "AIzaSyAEJNUL1rdx8HzwfKXDNRU--YIAKsiLqlo",
	authDomain: "callezenwaka.firebaseapp.com",
	databaseURL: "https://callezenwaka.firebaseio.com",
	projectId: "callezenwaka",
	storageBucket: "callezenwaka.appspot.com",
	messagingSenderId: "683863678006",
	appId: "1:683863678006:web:e9541531387f956b240c97"
})

export default firebase;