// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCYUmXdK9ZLr45aVSmIhxlmIhODAhRLH00',
  authDomain: 'wdi-dashboard.firebaseapp.com',
  projectId: 'wdi-dashboard',
  storageBucket: 'wdi-dashboard.appspot.com',
  messagingSenderId: '765029758300',
  appId: '1:765029758300:web:96d60e828c20a1bcd67d99',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
