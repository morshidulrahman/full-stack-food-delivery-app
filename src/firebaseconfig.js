import { getApp , getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA4JdtdOgiIG475MgeOJ14QJknsk2MHwHg",
    authDomain: "food-delivery-d012f.firebaseapp.com",
    databaseURL: "https://food-delivery-d012f-default-rtdb.firebaseio.com",
    projectId: "food-delivery-d012f",
    storageBucket: "food-delivery-d012f.appspot.com",
    messagingSenderId: "633470186060",
    appId: "1:633470186060:web:5517dfbb74be5de82d7ae9"
  };
  
  const app=getApps.length >0 ? getApp() : initializeApp(firebaseConfig)

  const firestore=getFirestore(app)
  const storage=getStorage(app)

  export {app, firestore, storage}

