const { Router } = require('express');
const router = Router();
const librosCTRL = require('../controllers/libros')

// Crear los endpoints para la ruta /libros
router.get("/libros", librosCTRL.getLibro );
router.post("/libros", librosCTRL.postLibro);
router.put("/libros", librosCTRL.putLibro);
router.delete("/libros", librosCTRL.deleteLibro);

// Exportar router
module.exports = router;