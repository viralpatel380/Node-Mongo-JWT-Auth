const mongoose = require('mongoose');
const moment = require('moment');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    mobileNo: {
        type: Number,
        required: true,
        min: 10,

    },
    rollNo: {
        type: String,
        required: true,
        min: 4,
        max: 20
    },
    institute: {
        type: String,
        required: true,
        min: 3,
        max: 500
    },
    mentorId: {
        type: String,


    },
    facultyId: {
        type: String,


    },
    createdAt: {
        type: Date,
        default: moment.now(),
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
        required: true,
    },
})

module.exports = mongoose.model('User', userSchema);
