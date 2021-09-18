
const admin = require('firebase-admin');
const fs = require('fs');
const serviceKey = require('./ServerKey.json');

async function upload() {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceKey),
            
        })

        var store = admin.firestore();
       
        fs.readFile('Updated data.json',(err,data)=>{
            if(err) console.log(err)
            else{
                JSON.parse(data).forEach((product)=>{
                    
                    store.collection('products').add(product).then(console.log)
                })
            }  
        })
    } catch (err) {
        console.log(err)
    }
}
upload();