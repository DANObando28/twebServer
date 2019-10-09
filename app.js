require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const configMensaje = require('./configMensaje')
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

var app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

app.post('/formulario', (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
})
app.listen(5000, () => {
  console.log('servidor corriendo')
});


//start server
//app.listen(process.env.PORT, () => console.log('Server started at port : ', process.env.PORT));
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
