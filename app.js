const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')


// Database
const db = require('./config/db_conn');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();


const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', require('./route/user_route'))




//home page route and view
// Index route
app.get('/', (req, res) => res.render('index'));


//  routes
app.use('/dash', require('./route/actRoute'));