var mongoose = require('mongoose');

// Product schema
var productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    created_at: {
        type: Date
    },
    status: {
        type: Boolean
    }
});

module.exports = mongoose.model('Product', productSchema);