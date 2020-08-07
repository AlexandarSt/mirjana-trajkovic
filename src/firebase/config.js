
  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAZY4DgRxCLrKQfoHSJgH8nWRNFAQIIBEQ",
    authDomain: "mirjana-trajkovic.firebaseapp.com",
    databaseURL: "https://mirjana-trajkovic.firebaseio.com",
    projectId: "mirjana-trajkovic",
    storageBucket: "mirjana-trajkovic.appspot.com",
    messagingSenderId: "379042396368",
    appId: "1:379042396368:web:c7bd3a9249b995c7c246d5",
    measurementId: "G-00X2K8WG3J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectFirestore, projectStorage};

