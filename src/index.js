const  express = require('express');
const  morgan = require('morgan')
const path = require('path')
const app = express();

//settings
app.set('port', process.env.PORT  || 3000 )
//Midlewares
app.use(morgan('dev'))
app.use(express.json())
//Routes
app.use(require('./routes/task.routes'))

//Static files
app.use(express.static(path.join(__dirname,'public')))

//start server

app.listen(app.get('port'),()=>{
    console.log(`server listening on port ${app.get('port')}`);
});
