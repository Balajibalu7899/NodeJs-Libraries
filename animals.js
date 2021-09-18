const { Console } = require('console');
const admin = require('firebase-admin');
const fs = require('fs');
const firestoreService = require('firestore-export-import');
const serviceKey = require('./Accountkey.json');
var firebaseConfig = {
    apiKey: "AIzaSyAd7bYtS3nZm1FaU2Ehj-v9t4bo-ypzJcg",
    authDomain: "swipe-2fdf0.firebaseapp.com",
    databaseURL: "https://swipe-2fdf0.firebaseio.com",
    projectId: "swipe-2fdf0",
    storageBucket: "swipe-2fdf0.appspot.com",
    messagingSenderId: "822795864212",
    appId: "1:822795864212:web:4ce1472c49f03edc364c81",
    measurementId: "G-MM3BYTZVLH"
};
async function upload() {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceKey),
            databaseURL: firebaseConfig.databaseURL,
        })

        var store = admin.database();
    //     store.ref('student').set({"name":"saikrishna",
    
    // "email":"balaji.17cs029@gmail.com",
    // "age":24,
    // "college":"cambridge institute of technology"
    //  }).then((err)=>{
    //      if(err)  console.log(err)
    //      else{
    //          console.log("success")
    //      }
    //  })
    store.ref('student').once("value",(snapshot)=>{
       
        console.log(snapshot.val())
    })
        
           
       
       
    } catch (err) {
        console.log(err)
    }
}
upload();