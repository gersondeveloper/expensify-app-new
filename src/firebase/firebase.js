import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD1svvxw2o71wfdQ1EtXgsr8KGwu0S4QG8",
    authDomain: "expensify-f5dda.firebaseapp.com",
    databaseURL: "https://expensify-f5dda.firebaseio.com",
    projectId: "expensify-f5dda",
    storageBucket: "expensify-f5dda.appspot.com",
    messagingSenderId: "69886715617",
    appId: "1:69886715617:web:3272a412cc4ca15653b9a0",
    measurementId: "G-H588KR4BM2"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  firebase.database().ref().set({
      name: 'Gerson'
  })