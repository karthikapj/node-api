var express = require('express');
var router = express.Router();
var percon = require('./../controllers/personcontrol');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a person');
});

/* POST users listing. */
router.post('/', percon.perpost);
router.get('/:person_data', percon.perget);
router.put('/:person_data', percon.perput);
router.delete('/:person_data', percon.perdelete);

module.exports = router;
