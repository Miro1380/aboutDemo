// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('aboutme', ['aboutme']);
//var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

// var Eschema = new Schema({
//   type: edu,
//   school: String,
//   degree: String,
//   last_year: Date
// });

// var edu = mongojs.model('Thing', Eschema);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/aboutme', function (req, res) {
    console.log('I Received a GET request');
    db.aboutme.find(function (err, docs) {
      console.log(docs);
      res.json(docs);
    });
});

//API Goes here

/*
app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');
 // 15-19 Pulls data from database. Gets everything. Sends it back in json format.
  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});
*/

// app.post('/contactlist', function (req, res) {
//   console.log(req.body);
//   db.contactlist.insert(req.body, function(err, doc) {
//     res.json(doc);
//   });
// });

// app.delete('/contactlist/:id', function (req, res) {
//   var id = req.params.id;
//   console.log(id);
//   db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
//     res.json(doc);
//   });
// });

// app.get('/contactlist/:id', function (req, res) {
//   var id = req.params.id;
//   console.log(id);
//   db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
//     res.json(doc);
//   });
// });

// app.put('/contactlist/:id', function (req, res) {
//   var id = req.params.id;
//   console.log(req.body.name);
//   db.contactlist.findAndModify({
//     query: {_id: mongojs.ObjectId(id)},
//     update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
//     new: true}, function (err, doc) {
//       res.json(doc);
//     }
//   );
// });

app.listen(8080);
console.log("Server running on port 8080");