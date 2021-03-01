const usuariosCtrl = {}

const Usuario = require('../models/Usuario')

usuariosCtrl.getUsuarios = async(req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuariosCtrl.createUsuario = async (req,res) => {
    const newUsuario = new Usuario(req.body)
    await newUsuario.save()
    res.send({message:'usuario creado'})
}

usuariosCtrl.getUsuario = async (req,res) => {
    const usuario = await Usuario.findById({_id: req.params.id})
    res.send(usuario)
}

usuariosCtrl.editUsuario = async (req,res) => {
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Usuario actualizado'})
}

usuariosCtrl.deleteUsuario = async (req,res) => {
   const usuario = await Usuario.findByIdAndDelete(req.params.id) 
   res.json({status: 'Usuario eliminado'})
}

module.exports = usuariosCtrl;