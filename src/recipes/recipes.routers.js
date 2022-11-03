const router = require('express').Router();
const recipeServices = require('./recipes.services');



const passport = require('passport');
require('../middlewares/auth.middleware')(passport)


//? /recipes
//? /recipes/recipes_id

router.route('/')
    .get(recipeServices.getAllRecipes)
    .post(
        passport.authenticate('jwt', {session: false}),
        recipeServices.postRecipe
    )

router.route('/recipes_id')
    .get(recipeServices.getRecipeById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        recipeServices.patchRecipe
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        recipeServices.deleteRecipe
    )

    module.exports = router