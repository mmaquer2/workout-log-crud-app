const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser');
const router = express.Router();
const Act = require('./model/actModel');
// Database
const db = require('./config/dbConn');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();


const PORT = process.env.PORT || 3002;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//home page route and view

// routes to display pages
app.get('/', (req, res) => res.render('index'));

app.get('/add', (req, res) => res.render('add'))

app.get('/dash',(req, res) => res.render('dash'))


//post route to add workouts to data base
app.post('/add', (req, res) => {
    let { workouttype, workoutdist, workouttime} = req.body;
    
    // Validate Fields
  
      // Insert into table
      Act.create({
        workouttype,
        workoutdist,
        workouttime
      })
        .catch(err => console.log(err));
    });
  

//display workouts route on dashboard

router.get('/dash', (req, res) => {
        console.log(Act)
    });



/*

    router.get('/', (req, res) => 
    Act.findAll()
    .then(acts => res.render('dash',  {
        
        acts
      }))
    .catch(err => console.log(err)));


    */