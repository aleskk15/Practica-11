const { isAuthenticated } = require('../middleware/auth')
const { checkRole } = require('../middleware/authorize')
const { validate } = require('../middleware/validate')

const router = require('express').Router()
const { getAll, getById, create, update, remove } = require('../controllers/requests.controller')
const { createRequestSchema, updateRequestSchema } = require('../schemas/requests.schema')
const { createAreaSchema, updateAreaSchema } = require('../schemas/areas.schema')


router.use(isAuthenticated)
router.get('/',  getAll)
router.get('/:id', getById)
router.post('/', checkRole('admin'), validate(createRequestSchema), create)
router.put('/:id', checkRole('admin'), validate(updateRequestSchema), update)

router.delete('/:id', checkRole('admin'), remove)



module.exports = router