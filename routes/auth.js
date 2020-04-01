const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const { registerValidation } = require('../validation');

router.post('/register', async (req, res) => {

    // Validate Data Nefore Create User
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)
   
    //Check If Email Exist
    const emailExist = await User.findOne({email : req.body.email});
    if(emailExist) return res.status(400).send('Email Already Registered !');

    //Hash the Password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt); 

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
        mobileNo: req.body.mobileNo,
        rollNo: req.body.rollNo,
        institute: req.body.institute,
        mentorId: req.body.mentorId,
        facultyId: req.body.facultyId,
    }); 
    try {

        const savedUser = await user.save();
        res.send({user : user._id});
    } catch (error) {
        res.status(400).send(error);
    }
})

//router.post('/login')

module.exports = router;
