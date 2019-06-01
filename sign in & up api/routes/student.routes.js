const express = require("express"),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    authorize = require('../_helpers/authorize'),
    Role = require('../_helpers/role'),
    studentController = require('../controllers/student.controller');

const StudentRouter = express.Router();

//enable cors
StudentRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

StudentRouter.post('/create', studentController.Create);
StudentRouter.get('/try', authorize(Role.Student), studentController.temp);

module.exports = StudentRouter;