const { User } = require("../models/UserModel");
const UserRole = require('../enums/UserRole');

const { Vehicle } = require("../models/VehicleModel");
const { ServiceRecord } = require("../models/ServiceRecordModel");
const { ServiceAgent } = require("../models/ServiceAgentModel");


//Manage service agents 
exports.createAgent = async ( req,res ) => {

    const user = new User(req.body);

    user.save((err, doc) => {
              if (err) {
            return res.status(422).json({
                success: false,
                message: "Please enter unique email & username!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully Signed Up!"
            });
        }
    });
        
};

exports.deleteAgent = async ( req, res ) => {
    await User.findById(req.params.id, async function(err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid id!"
            });
        }

        if(!user) {
            return res.status(422).json({
                success: false,
                message: "Invalid id!"
            });
        }
    });

    await User.remove({_id: req.params.id,role:'SERVICE_AGENT'}, function(err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid agent id!"
            });
        }
           return res.status(200).json({
            success: true,
            message: "Agent deleted!"
        });
    });
}

exports.getAllAgents = async (req, res) => {
    await User.find({ role:'SERVICE_AGENT'},function(err, user) {
             if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive agents!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received all agents!",
            data: user
        });
    });
};

//Manage all customers

exports.getAllCustomers = async (req, res) => {
    await User.find({ role:'CUSTOMER'},function(err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive customers!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received all customers!",
            data: user
        });
    });
};

exports.deleteCustomer = async ( req, res ) => {
    const id = req.params.id;
    await User.findById(req.params.id, async function(err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid id!"
            });
        }

        if(!user) {
            return res.status(422).json({
                success: false,
                message: "Invalid id!"
            });
        }
    });

    await User.remove({_id: req.params.id,role:'CUSTOMER'}, function(err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid customer id!"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Customer deleted!"
        });
    });
};

//Manage all vehicles

exports.getAllCustomerVehicles = async (req, res) => {
    await Vehicle.find(function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive customers' vehicles!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received all customers' vehicles!",
            data: vehicle
        });
    });
};

exports.deleteCustomerVehicle = async ( req, res ) => {
    await Vehicle.remove({_id: req.params.id}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid Vehicle id!"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Customer Vehicle is deleted!"
        });
    });
};

//Manage all vehicles service records

exports.getAllCustomerVehiclesRecords = async (req, res) => {
    await ServiceRecord.find(function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive customers' vehicle records!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received all customer vehicles records!",
            data: serviceRecord
        });
    });
};

exports.deleteCustomerVehicleRecord = async ( req, res ) => {
    await ServiceRecord.remove({_id: req.params.id}, function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid Vehicle Service record id!"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Custoemr Vehicle Service Record is deleted!",
            data: serviceRecord
        });
    });
};


