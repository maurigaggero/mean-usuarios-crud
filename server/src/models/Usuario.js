const {Schema, model} = require('mongoose')

const usuarioSchema = new Schema({
    nombre: {type: String, required:true},
    sexo: {type: String, required:true},
    direccion: {type: String, required:true},
    ciudad: {type: String, required:true},
    correo: {type: String, required:true},
    activo: {type: Boolean}
} , {
    timestamps: true,
    versionKey: false
})

module.exports = model('Usuario', usuarioSchema)