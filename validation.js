const Joi = require('@hapi/Joi');

//Register Validation
const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
        role: Joi.string().required(),
        mobileNo: Joi.number().min(10).required(),
        rollNo: Joi.string().required(),
        institute: Joi.string().required(),
        mentorId: Joi.string(),
        facultyId: Joi.string(),
    })
   return schema.validate(data);
}
//Login Validation
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
    })
   return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

