const uuid = require('uuid')

const Ingredients = require('../models/ingredients.models')
const UsersIngredients = require('../models/users_ingredients.models')



const getAllIngredients = async() => {
    return await Ingredients.findAll()
    
}

const getIngredientById = async (id) => {
    return await Ingredients.findOne({
        where: {
            id
        }
    })
   
}

const createIngredient = async (data) => {
    return await Ingredients.create({
        id: uuid.v4(),
        name: data.name,
        typeId: data.typeId,
        urlImg: data.urlImg
    })
   
}

const updateIngredient = async (id, data) => {
    return await Ingredients.update(data, {
        where: {
            id
        }
    })
  
}

const deleteIngredient = async (id) => {
    return await Ingredients.destroy({
        where: {
            id
        }
    })

}

const addIngredientToUser =  async (data)=>{
    return await UsersIngredients.create({
        id: uuid.v4(),
        amount: data.amount,
        userId: data.userId,
        ingredientId: data.ingredientId
    })

}

module.exports = {
    getAllIngredients,
    getIngredientById,
    createIngredient,
    updateIngredient,
    deleteIngredient,
    addIngredientToUser
}