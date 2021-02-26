const UserRole = require("../enums/UserRole");
const { User } = require("../models/UserModel");
const { ServiceRecord } = require("../models/ServiceRecordModel");
const { Appointment } = require("../models/AppointmentModel")
const { Vehicle } = require("../models/VehicleModel")


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

exports.createAppointment = async (req, res) => {

    var newAppointment = new Appointment(req.body);
    newAppointment.User = req.user_id;

    await newAppointment.save((err, appointment) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create Appointment!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New Appointment is created!",
                data: appointment
            });
        }
    });
};

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

exports.deleteAppointment = async (req, res) => {
    await Appointment.remove({_id: req.params.id}, function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Appointment id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Appointment deleted!",
            data: appointment
        });
    });
};

exports.createVehicle = async (req, res) => {

    var newVehicle = new Vehicle(req.body);
    newVehicle.User = req.user_id;

    await newVehicle.save((err, vehicle) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create Vehicle!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Vehicle is created!",
                data: vehicle
            });
        }
    });
};

exports.viewVehicleById = async (req, res) => {
    await Vehicle.findById(req.params.id, async function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid vehicle id!"
            });
        }

        if(!vehicle) {
            return res.status(422).json({
                success: false,
                message: "Invalid vehicle id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Vehicle received!",
            data: vehicle
        });
    });
};

exports.updateVehicle = async (req, res) => {
    await Vehicle.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid Vehicle!"
            });
        }

        if(!vehicle) {
            return res.status(422).json({
                success: false,
                message: "Invalid Vehicle id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Vehicle updated!",
            data: vehicle
        });
    });
};

exports.deleteVehicle = async (req, res) => {
    await Vehicle.remove({_id: req.params.id}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Vehicle id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Vehicle deleted!"
        });
    });
};