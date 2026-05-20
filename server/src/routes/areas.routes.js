const { isAuthenticated } = require('../middleware/auth')

const router = require('express').Router()
const { getAll, getById, create, update, remove } = require('../controllers/areas.controller')
const { validate } = require('../middleware/validate')
const { createAreaSchema, updateAreaSchema } = require('../schemas/areas.schema')


router.get('/', isAuthenticated, getAll)
//router.get('/', getAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router