const router = require('express').Router()
const categoriesServices = require('./categroies.services')
const passport = require('passport')
require('../middlewares/auth.middleware')(passport)

const adminValidate = require('../middlewares/role.middleware')

//? /
//? /:id


router.route('/')
    .get(categoriesServices.getAllCategories)
    .post(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        categoriesServices.postCategory) // TODO hacerla protegida por administrador 

router.route('/:id')
    .get(categoriesServices.getCategoryById)
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        categoriesServices.deleteCategory) // TODO hacerla protegida por administrador 


module.exports = router