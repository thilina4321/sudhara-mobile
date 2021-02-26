var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PaymentModelSchema = new Schema({
    amount: {
        type: String,
        required: [true, 'Amount field is required!'],
        maxlength: 10
    },
    Customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'Customer agent field is required!']
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

const Payment = mongoose.model('Payment', PaymentModelSchema);
module.exports = { Payment }