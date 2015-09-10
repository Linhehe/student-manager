var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/student');

require('../models/Schools');
require('../models/Colleges');
require('../models/Professions');
require('../models/Classes');
require('../models/Teachers');
require('../models/Students');
require('../models/SignIns');
require('../models/Subjects');
require('../models/Vacations');
require('../models/Addresses');
require('../models/TransferClasses');
require('../models/SubjectUnits');
require('../models/Messages');

var School = mongoose.model('School');
var College = mongoose.model('College');
var Profession = mongoose.model('Profession');
var Class = mongoose.model('Class');
var Teacher = mongoose.model('Teacher');
var Student = mongoose.model('Student');
var SignIn = mongoose.model('SignIn');
var Subject = mongoose.model('Subject');
var Vacation = mongoose.model('Vacation');
var Address = mongoose.model('Address');
var TransferClass = mongoose.model('TransferClass');
var SubjectUnit = mongoose.model('SubjectUnit');
var Message = mongoose.model('Message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getVacationInformation', function(req,res,next){
  //
  Vacation.find({})
      .populate('Student')
      .exec(function(err,vacations){
        //
        if(err){
          console.error(err);
        } else{
          console.log(vacations);
          res.json(vacations);
        }
      });
});

module.exports = router;
