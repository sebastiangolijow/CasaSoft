const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const casasoft = require('./casasoft')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/api', tipos)
router.use('/', casasoft)


module.exports = router;
