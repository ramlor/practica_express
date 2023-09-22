var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ruta', function(req, res, next) {
  const db = req.app.get('dataBase');
  const query = "SELECT * from  Personas"
  db.all(query, function(err, rows){
    if(err) {
      console.log(err)
      return;

    }
    res.render("Personas",{personas:rows});
  })
});

module.exports = router;
