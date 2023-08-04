// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from 'firebase/auth';
// Функція для підключення бази даних у проект
import { getFirestore } from 'firebase/firestore';
// Функція для підключення сховища файлів в проект
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDnL-0ZCnl99XpjxJef_waxVbKphjNyAJE',
  authDomain: 'react-native-app-96011.firebaseapp.com',
  projectId: 'react-native-app-96011',
  storageBucket: 'react-native-app-96011.appspot.com',
  messagingSenderId: '176573065197',
  appId: '1:176573065197:web:59af81ea3e3607c9e029e4',
  measurementId: 'G-RF4LKDTM1T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
