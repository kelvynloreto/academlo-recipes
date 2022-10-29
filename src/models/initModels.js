const Categories = require('./categories.models')
const Users = require('./users.models')
const Instructions = require('./instructions,models')
const Ingredients = require('./ingredients.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const Recipes = require('./recipes.models')
const Types = require('./types.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models')

// hasMany = tiene muchos
// belongTo = pertenece a 
const initModels = () => {
//? hasMany lleva la llave foranea dentro del parentisis
//? belongTo lleva la llave foranea en el primer parametro  

//* Users 1:M Recipes
Users.hasMany(Recipes)
Recipes.belongsTo(Users)

//* Users 1:M UsersRecipes
Users.hasMany(UsersRecipes)
UsersRecipes.belongsTo(Users)

//* Recipes 1:M UsersRecipes
Recipes.hasMany(UsersRecipes)
UsersRecipes.belongsTo(Recipes)

//* Users 1:M UsersIngredients
Users.hasMany(UsersIngredients)
UsersIngredients.belongsTo(Users)

//* Ingredients 1:M UsersIngredients
Ingredients.hasMany(UsersIngredients)
UsersIngredients.belongsTo(Ingredients)

//* Categories 1:M Recipes
Categories.hasMany(Recipes)
Recipes.belongsTo(Categories)

//* Recipes 1:M Instructions
Recipes.hasMany(Instructions)
Instructions.belongsTo(Recipes)

//* Recipes 1:M RecipesIngredients
Recipes.hasMany(RecipesIngredients)
RecipesIngredients.belongsTo(Recipes)

//* Ingredients 1:M RecipesIngredients
Ingredients.hasMany(RecipesIngredients)
RecipesIngredients.belongsTo(Ingredients)

//* Types 1:M Ingredients
Types.hasMany(Ingredients)
Ingredients.belongsTo(Types)


}


module.exports = initModels