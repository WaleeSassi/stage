// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTzwX-jq9YSiYHpzC1pWq0K2JzU18Sn-Q',
  authDomain: 'stageete-43cda.firebaseapp.com',
  projectId: 'stageete-43cda',
  storageBucket: 'stageete-43cda.appspot.com',
  messagingSenderId: '607779909895',
  appId: '1:607779909895:web:7f5462eeae44cb9e09d5a2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
