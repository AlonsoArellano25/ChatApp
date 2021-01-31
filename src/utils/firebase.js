import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAOlh0aLa_y_W2yCCAeamHNAq9OEZTdl5M',
  authDomain: 'chat-747ae.firebaseapp.com',
  databaseURL: 'https://chat-747ae-default-rtdb.firebaseio.com',
  projectId: 'chat-747ae',
  storageBucket: 'chat-747ae.appspot.com',
  messagingSenderId: '49134289128',
  appId: '1:49134289128:web:dd83de8e27d4e4496a095d',
};

export default firebase.initializeApp(firebaseConfig);
