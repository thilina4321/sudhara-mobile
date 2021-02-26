module.exports = function(app) {

    const { Auth } = require("../middlewares/auth");
    const { Admin } = require("../middlewares/Admin");

    const AdminController = require("../controllers/AdminController")
    
    //Manage service agents
    app.post("/admin/create-agent",[Auth,Admin],AdminController.createAgent);
    app.delete("/admin/delete-agent/:id",[Auth,Admin],AdminController.deleteAgent);
    app.get("/admin/view-all-agents",[Auth,Admin],AdminController.getAllAgents);
    
    //Manage all customers
    app.get("/admin/view-all-customers",[Auth,Admin],AdminController.getAllCustomers);
    app.delete("/admin/delete-customer/:id",[Auth,Admin],AdminController.deleteCustomer);
    
    //Manage all vehicles
     app.get("/admin/view-all-vehicles",[Auth,Admin],AdminController.getAllCustomerVehicles);
     app.delete("/admin/delete-vehicle/:id",[Auth,Admin],AdminController.deleteCustomerVehicle);

    //Manage all vehicle service records
     app.get("/admin/view-all-service-records",[Auth,Admin],AdminController.getAllCustomerVehiclesRecords);
     app.delete("/admin/delete-vehicle-service-record/:id",[Auth,Admin],AdminController.deleteCustomerVehicleRecord)
}