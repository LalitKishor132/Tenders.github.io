import nodemailer from "nodemailer";
function sendEmail(email, password) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rj.lalitverma@gmail.com",
      pass: "kbbvqxmgkaxvzqrs",
    },
  });

  var mailOptions = {
    from: "rj.lalitverma@gmail.com",
    to: email,
    subject: "verification password",
    html:
      "<h1>Welcome to Tenders</h1><a>You have successfully register to our application , your login credentials are attached below</a><h2>Username : " +
      email +
      "</h2><h2>Password : " +
      password +
      "</h2><h1>Click on the link below to redirect</h1>http://localhost:3000/verifyuser/" +
      email,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export default sendEmail;
