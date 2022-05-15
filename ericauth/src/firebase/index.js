import Vue from 'vue';


import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvO2NEHaUoiQFKjMuFp4y026JEiKRjgbo",
  authDomain: "test-edc56.firebaseapp.com",
  projectId: "test-edc56",
  storageBucket: "test-edc56.appspot.com",
  messagingSenderId: "77685299864",
  appId: "1:77685299864:web:6d1a63c9547a46f609ceed",
  measurementId: "G-HM3LDK2M1W"
};

const app = initializeApp(firebaseConfig);
