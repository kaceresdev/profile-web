const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const functions = require("firebase-functions");

const app = express();
const port = 8443;

app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kaceresdev@gmail.com",
      pass: "prgc dgvv surj tdwa",
    },
  });

  const mailOptions = {
    from: "kaceresdev@gmail.com",
    to: "kaceresdev@gmail.com",
    subject: "Nuevo contacto desde la Web",
    text: `
      Asunto: ${name}
      Email: ${email}
      Mensaje: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

exports.app = functions.https.onRequest(app);
