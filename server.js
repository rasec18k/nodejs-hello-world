var express = require('express'),
    app     = express(),
    morgan  = require('morgan');
    
Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var rando = Math.floor(Math.random() * (100 - 1) + 1);
console.log('Generated pod ID - %s', rando);

app.get('/', function (req, res) {
    res.render('index.html', { messageFromNode : 'Hello from pod ID - ' + rando });
    console.log('Calling index.html from pod ID - %s', rando);
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;