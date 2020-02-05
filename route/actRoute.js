const express = require('express');
const router = express.Router();
const db = require('../config/dbConn');
const user = require('../model/actModel');
const Sequelize = require('sequelize')

// Get list of all users
//there is some kind of issue related to where users is being called in the data
//base and the route
router.get('/', (req, res) => 
user.findAll()
    .then(users => res.render('dashboard',  {
        
        users
      }))
    .catch(err => console.log(err)));

// Display add add form
router.get('/add', (req, res) => res.render('add'));

// Add a gig
router.post('/add', (req, res) => {
  let { username, email} = req.body;
  let errors = [];

  // Validate Fields
  if(!username) {
    errors.push({ text: 'Please add a name' });
  }
  if(!email) {
    errors.push({ text: 'Please your email address' });
  }
  
  
    // Insert into table
    user.create({
      username,
      email
    })
      .then(users => res.redirect('/dashboard/add'))
      .catch(err => console.log(err));
  });
