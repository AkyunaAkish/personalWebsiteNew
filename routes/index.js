require('dotenv').load();
var express = require('express');
var router = express.Router();



router.get('/api/v1/guitars', function(req,res,next){
  res.json([
    {id:1, make: 'Martin', model: 'D15'},
    {id:2, make: 'Yamaha', model: 'D16'}
  ])

})

// router.post('/email', function(req,res,next){
//   console.log('Hit email route', req.body);
//   var mailOptions={
//     to : smtpTransport.auth.user,
//     subject : 'Email sent from personal website',
//     text : req.body.phone + "\n" + req.body.name + "\n" + req.body.message
//   }
//   console.log('mail options!', mailOptions);
//   // smtpTransport.sendMail(mailOptions, function(error, response){
//   //   if(error){
//   //     console.log(error);
//   //     res.json("error");
//   //   }else{
//   //     console.log("Message sent: " + response.message);
//   //     res.json("sent");
//   //   }
//   // });
//
// })



router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  });
});


module.exports = router;
