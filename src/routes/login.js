const { Router } = require('express');
const router = Router();
const loginCtrl = require('../controllers/login')

// Crear los endpoints para la ruta login
router.post("/login", loginCtrl.appLogin);

// Exportar router
module.exports = router;