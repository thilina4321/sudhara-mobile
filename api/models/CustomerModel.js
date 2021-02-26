var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CustomerModelSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User field is required!']
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

const Customer = mongoose.model('Customer', CustomerModelSchema);
module.exports = { Customer }