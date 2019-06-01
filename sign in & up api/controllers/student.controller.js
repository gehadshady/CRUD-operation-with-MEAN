const mongoose = require('mongoose'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    authorize = require('../_helpers/authorize'),
    Role = require('../_helpers/role');
require('../Models/student');


const StudentSchema = mongoose.model('Student');


const Create = async(req, res, next) => {
    passport.authenticate('signup', { session: false }, async(err, user, info) => {
        if (err) {
            return res.status(400).send({
                message: err
            });

        } else {
            if (!req.body) {
                res.status(400).send({
                    message: 'student content can not be empty'
                });

            }
            // console.log(`request user : ${user}`);
            const student = new StudentSchema({
                NatinalId: req.body.NatinalId,
                User: user.id,

            });
            user.role = Role.Student;
            req.user.role = Role.Student;
            // console.log(req.user.role);


            try {
                let data = await student.save();
                res.send({
                    student: {
                        username: user.username,
                        NatinalId: data.NatinalId,

                    }
                });

            } catch (error) {
                res.status(500).send({
                    message: error.message
                });
            }

            // res.json({
            //     message: 'signup successful',
            //     user: req.user
            // });
        }
    })(req, res, next);
    // console.log(req);

};




const FindAll = async(req, res, next) => {

    try {
        let students = StudentSchema.find();
    } catch (error) {
        // return res.sa
    }


};

let temp = (req, res, next) => {

    // let aut = authorize(Role.Student);

    // return res.status(aut.status).send({
    //     message: aut.message
    // });

    return res.status(400).send({
        message: 'remp'
    });

};
module.exports = {
    Create,
    temp
};