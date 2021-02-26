var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AppointmentModelSchema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'Customer field is required!']
    },
    status: {
        type: String,
        enum: ['approve','reject'],
        required: [true, 'Status field is required']
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', AppointmentModelSchema);
module.exports = { Appointment }