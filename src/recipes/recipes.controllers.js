const { Op } = require("sequelize");
const uuid = require('uuid');

const Recipes = require('../models/recipes.models');
const Users = require('../models/users.models')
const Categories = require('../models/categories.models')
const Instructions = require('../models/instructions,models')
const RecipeIngredients = require('../models/recipes_ingredients.models')
const Ingredients = require('../models/ingredients.models')
const Types = require('../models/types.models')
const UsersIngredients = require('../models/users_ingredients.models')




const getAllRecipes = async () => {
    return await Recipes.findAll({
        attributes: {
            exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
        },
        include: [{
            model: Categories,
        },
        {
            model: Users,
            attributes:['id','firstName','lastName']
        },
        {
            model: Instructions,
            attributes:['description','step']
        }, {
            model: RecipeIngredients,
            attributes:['id','amount'],

            include:{
                model: Ingredients,
                attributes:['id','name','urlImg'],
                include:{
                    model:Types,
                }
            }
        }
        ]
    })
};

const getRecipeById = async (id) => {
    return await Recipes.findOne({
        where: {
            id
        }
    })
};

const createRecipe = async (data) => {
    return await Recipes.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        urlImg: data.urlImg,
        time: data.time,
        portions: data.portions,
        origin: data.origin,
        likes: data.likes,
        userId: data.userId,
        categoryId: data.categoryId
    })
};

const updateRecipe = async (id, data) => {
    return await Recipes.update(data, {
        where: {
            id
        }
    })
};

const deleteRecipe = async (id) => {
    return await Recipes.destroy({
        where: {
            id
        }
    })
};

//? controlador para obtener las recetas que puede hacer un usuario desde los ingredientes agregados
const getMyRecipes = async(userId) => {
    const userIngredients = await UsersIngredients.findAll({
      where: {
        userId
      }
    })
    const filteredIngredients = userIngredients.map( obj = obj.ingredientId)
    const recipeIngredients = await RecipeIngredients.findAll({
      where: {
        ingredientId: {
          [Op.in]: filteredIngredients
        }
      }
    })

    const filtereRecipes = recipeIngredients.map(obj => obj.recipeId)
    
    const data = Recipes.findAll({
        where:{
            id:{
                [Op.in]: filtereRecipes
            }
        }
    })
    return data
}
  

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getMyRecipes
};