const express = require('express');
const router = express.Router();
const Act = require('../model/actModel');



//base and the route
router.get('/', (req, res) => 
Act.findAll()
    .then(acts => res.render('dash',  {
        
        acts
      }))
    .catch(err => console.log(err)));

// Display add add form
router.get('/add', (req, res) => res.render('add'));

// Add a gig


  module.exports = router;