const { ServiceRecord } = require("../models/ServiceRecordModel");
const { Appointment } = require("../models/AppointmentModel")


exports.createServiceRecord = async (req, res) => {

    var newServiceRecord = new ServiceRecord(req.body);
    newServiceRecord.serviceAgent = req.user._id;

    await newServiceRecord.save((err, serviceRecord) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create service Record!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New service record is created!",
                data: serviceRecord
            });
        }
    });  
};


exports.updateServiceRecord = async (req, res) => {
    await ServiceRecord.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service record id!"
            });
        }

        if(!serviceRecord) {
            return res.status(422).json({
                success: false,
                message: "Invalid service record id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Service Record updated!",
            data: serviceRecord
        });
    });
};

exports.deleteServiceRecord = async (req, res) => {
    await ServiceRecord.remove({_id: req.params.id}, function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service record id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Service Record deleted!",
            data: serviceRecord
        });
    });
};

// filter by appointment, by customer, by vehicle, by srvice record of vehicle

exports.viewAppointmentById = async (req, res) => {
    await Appointment.findById(req.params.id, async function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid appointment id!"
            });
        }

        if(!appointment) {
            return res.status(422).json({
                success: false,
                message: "Invalid appointment id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Appointment received!",
            data: appointment
        });
    });
};

exports.updateAppointment = async (req, res) => {
    await Appointment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid Appointment!"
            });
        }

        if(!appointment) {
            return res.status(422).json({
                success: false,
                message: "Invalid Appointment id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Appointment updated!",
            data: appointment
        });
    });
};

exports.viewServiceRecordById = async (req, res) => {
    await ServiceRecord.findOne({ _id: req.params.id }, (err, serviceRecord) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid Service Record id!"
            });
        }

        if(!serviceRecord) {
            return res.status(422).json({
                success: false,
                message: "Invalid Service Record id!"
            });
        }
        
        return res.status(422).json({
            success: true,
            message: "Service Record received!",
            data: serviceRecord
        });
    });
};