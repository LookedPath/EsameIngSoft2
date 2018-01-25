var express = require('express');
var app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


    var router = express.Router();

//test router
    router.get('/', function (req, res) {
        res.send('Prova deployment');
    });

    app.use(router);
var port = process.env.PORT;

    var server = app.listen(port,  function () {
        if(process.env.NODE_ENV !== 'test') {
            console.log("Service attivo sulla porta " + port +" e ascolta solo per localhost");
        }
    });
