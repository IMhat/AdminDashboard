const {Schema, model} = require('mongoose')

const empleadosSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },

}, 
{
    timestamps: true,
    versionKey: false
}
)

module.exports = model('Empleados', empleadosSchema)