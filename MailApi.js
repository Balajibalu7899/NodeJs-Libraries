const {google} = require('googleapis');
const nodemailer = require("nodemailer");
const {OAuth2Client} = require('google-auth-library');

const  CLIENT_ID = "896733783793-41jpe5ohdrd3bln97vie0tib26nlf2pj.apps.googleusercontent.com";
const CLIENT_SECRETE = "aHFfGif1YNPhRkr0C-uLm60L";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04rWtfs35cpq3CgYIARAAGAQSNwF-L9IruetRHdARy6-RV9E950Dyl08M0HZROuwrqAgVPTJ2CKf_nAU_rfVHf9FxIpQe0weYF0o";
 



const oAuth2Client = new OAuth2Client(CLIENT_ID,CLIENT_SECRETE,REDIRECT_URI);
console.log(`oAuthClient api key=>${oAuth2Client.apiKey}`);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

async function sendMail(){
    try{
           const accessToken = await oAuth2Client.getAccessToken();
           console.log(`access token=>${accessToken.token}`);
           const transport = nodemailer.createTransport({
               service: 'gmail',
               auth: {
                   type : 'OAuth2',
                   user: 'malabalaji7899@gmail.com',
                   clientId: CLIENT_ID,
                   clientSecret: CLIENT_SECRETE,
                   refreshToken: REFRESH_TOKEN,
                   accessToken: accessToken
               }
           })
           const mailOptions = {
               from: '<malabalaji7899@gmail.com>',
               to: 'balajibalu7899@gmail.com',
               subject: "oAuth 2 Working",
               text: "gmail api success",
               html: `<h1 style="color: green;">mail successed</h1>`
           } 
           const result = await transport.sendMail(mailOptions)
           return result;
    }catch(error){
          return error;
    }
}

sendMail().then(result=>{
    console.log("success")
    console.log(result)
}).catch(error=>{
    console.log(error)
})