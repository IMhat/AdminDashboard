const {Schema, model} = require('mongoose')

const pointSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    point: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Point', pointSchema)