module.exports = function(app) {
    const { Auth } = require("../middlewares/auth");
    const { Customer } = require("../middlewares/customer");

    const CustomerController = require("../controllers/CustomerController");

    app.get("/service_record/:id", [Auth, Customer], CustomerController.viewServiceRecordById);
    //Manage Appointments
    app.post("/create_appointment", [Auth, Customer], CustomerController.createAppointment);
    app.get("/appointment/:id", [Auth, Customer], CustomerController.viewAppointmentById);
    app.patch("/update_appointment/:id", [Auth, Customer], CustomerController.updateAppointment);
    app.delete("/delete_appointment/:id", [Auth, Customer], CustomerController.deleteAppointment);
   
    // Manage Vehicles
    app.post("/create_vehicle", [Auth, Customer], CustomerController.createVehicle);
    app.get("/view-vehicle/:id", [Auth, Customer], CustomerController.viewVehicleById);
    app.patch("/update_vehicle/:id", [Auth, Customer], CustomerController.updateVehicle);
    app.delete("/delete_vehicle/:id", [Auth, Customer], CustomerController.deleteVehicle);


};