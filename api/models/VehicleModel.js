var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var VehicleModelSchema = new Schema({
    vehicleNumber: {
        type: String,
        required: [true, 'Vehicle Number field is required!'],
        maxlength: 10
    },
    vehicleBrand: {
        type: String,
        required: [true, 'Vehicle Brand Description field is required!']
    },
    vehicleModel: {
        type: String,
        required: [true, 'Vehicle Model Description field is required!']
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'Customer field is required!']
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

const Vehicle = mongoose.model('Vehicle', VehicleModelSchema);
module.exports = { Vehicle }