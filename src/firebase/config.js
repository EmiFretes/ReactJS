import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCmVPiuZ055dwngXBdpVDf-90Yb5moj1E8",
    authDomain: "projrjs.firebaseapp.com",
    projectId: "projrjs",
    storageBucket: "projrjs.appspot.com",
    messagingSenderId: "213519997109",
    appId: "1:213519997109:web:ea9a5ad20dbd5f64f586fc"
  };
  
  initializeApp(firebaseConfig);
  export const db = getFirestore(app)