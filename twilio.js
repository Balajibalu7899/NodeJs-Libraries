const accountId = "ACd274cca0f2e73ea67123865347797613";
const authToken = "e21e66084c59c389d25072289a088be5";
const client = require('twilio')(accountId,authToken);

var bal = 'https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript';
async function bala() {
    try{
         console.log("called")
        await client.messages.create({
            from:'+17028723771',
            to:'+919901443931',
            body:`${bal}`
        })
        }catch(err){
            console.log(err)
        }
}
bala();