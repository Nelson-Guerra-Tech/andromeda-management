import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAHz21Plei6nxon5s79NGyerGZAFkCpYzU',
  authDomain: 'andromeda-management.firebaseapp.com',
  projectId: 'andromeda-management',
  storageBucket: 'andromeda-management.appspot.com',
  messagingSenderId: '325224357379',
  appId: '1:325224357379:web:7283874d3437cf58ddb836',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
