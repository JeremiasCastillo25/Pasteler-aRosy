const express = require('express');
var path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT  ||3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.render(__dirname + '/views/index.ejs');
});
module.exports = app;