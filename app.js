const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

//Conexion BD
const mongoose = require('mongoose');
//const url = 'mongodb://localhost:27017/primerBd'
const url = 'mongodb+srv://tovisz:Sadelto30@dbmascotas.mlc4x.mongodb.net/?retryWrites=true&w=majority'
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(url, options).then(()=>{
    console.log('Conectado a mongo')},
    err => {err}
);

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas
/*app.get('/', (req, res)=>{
    res.send('Hola mundo');
})*/

//middleware para vue.js
app.use('/api', require('./routes/primerBd'));
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(process.env.PORT,()=>{
    console.log('Servidor inciado en el puerto', app.get('puerto'));
});