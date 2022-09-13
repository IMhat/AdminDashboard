const {Schema, model} = require('mongoose')

const productSchema = Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    productImage: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Product', productSchema)