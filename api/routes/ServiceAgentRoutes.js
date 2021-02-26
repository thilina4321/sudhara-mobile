module.exports = function(app) {
    const { Auth } = require('../middlewares/auth');
    const { ServiceAgent } = require('../middlewares/serviceAgent');

    const ServiceAgentController = require("../controllers/ServiceAgentController");

    app.post("/create_service_record", [Auth, ServiceAgent], ServiceAgentController.createServiceRecord);
    app.patch("/update_service_record/:id", [Auth, ServiceAgent], ServiceAgentController.updateServiceRecord);
    app.delete("/delete_service_record/:id", [Auth, ServiceAgent], ServiceAgentController.deleteServiceRecord);
    
};