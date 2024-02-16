import { initializeApp } from 'firebase/app'
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from '@firebase/auth'
import { getFirestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAMhPQiyT8es9vMFjFjUpNFL7HVgjD5SRA',
  authDomain: 'rnchatapp-5d128.firebaseapp.com',
  projectId: 'rnchatapp-5d128',
  storageBucket: 'rnchatapp-5d128.appspot.com',
  messagingSenderId: '750033693198',
  appId: '1:750033693198:web:b93c31f3113480fda22a5f',
}

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
})
