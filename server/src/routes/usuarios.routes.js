const {Router} = require('express')
const router = Router()

const usuariosCtrl = require('../controllers/usuarios.controller')

router.get('/', usuariosCtrl.getUsuarios);
router.post('/', usuariosCtrl.createUsuario);
router.get('/:id', usuariosCtrl.getUsuario);
router.put('/:id', usuariosCtrl.editUsuario);
router.delete('/:id', usuariosCtrl.deleteUsuario);

module.exports = router