const { Router } = require('express');
const router = Router();
const usuarioCTRL = require('../controllers/registro')

// Crear los endpoints para la ruta usuario
router.post("/registro", usuarioCTRL.postUsuario);
router.put("/registro", usuarioCTRL.putUsuario);

// Exportar router
module.exports = router;