const {Schema, model} = require('mongoose')

const notificationSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },


}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Notification', notificationSchema)