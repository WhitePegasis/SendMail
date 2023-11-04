//Reference Sendgrid doc: https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs
require('dotenv').config(); // for accessing key from .env file
const sendgrid = require('@sendgrid/mail'); 
const express = require('express');
var cors = require('cors'); // for allowing frontends running on different IP to hit our backend deployed on different ip 

const app = express();
const port = 8000;

app.use(cors());

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'royshashwat55@gmail.com',
  from: 'shashwatunf@gmail.com',
  subject: 'Sample Email Subject',
  text: 'This is a sample email message.',
  html: '<strong>Documentation is the best resource</strong>',
};

app.post('/', (req, res) => {
  sendgrid.send(msg)
    .then((res) => {
      console.log("Mail sent successfully , Status Code: " + res[0].statusCode); // if response is 202 , this implies mail is successfully sent
    })
    .catch((err) => {
      console.log("Error aa gya bhau");
    });

  res.send('Message sent!'); // sending response to the frontend
})

app.listen(port, () => {
  console.log(`Sourav's Mail App is listening on port ${port}`)
});



