"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config()

// Static folder
app.use(express.static(__dirname + '/public'));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

app.post('/send', (req, res) => {
  const htmlToTxt = (html) => {
    return html.replace(/<[^>]+>/g, '') // strips string from HTML tags
 }
  const output = `
    <p>You have a new contact request</p>
    <h3>Email: <a href="mailto:${req.body.email}">${req.body.email}</a></h3>
    <h3>Message</h3>
    <p>${req.body.mailcontent}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST_NAME,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.MAILER_EMAIL, // generated ethereal user
        pass: process.env.MAILER_PASS // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: `"Wiadomość z PORTFOLIO" <${process.env.MAILER_EMAIL}>`, // sender address
      to: process.env.MAIL_TO, // list of receivers
      subject: 'Wiadomość z PORTFOLIO', // Subject line
      text: htmlToTxt(output), // plain text output
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);  
      res.sendFile(path.join(__dirname, 'public/sent.html'));
  });
  });

app.listen(5000, () => console.log('Server started...'));