const uuid = require('uuid')

const Instructions = require('../models/instructions.models')

const getAllInstructions = async() => {
    return await Instructions.findAll()
 
}

const getInstructionById = async (id) => {
    return await Instructions.findOne({
        where: {
            id
        }
    })

}

const createInstruction = async (data) => {
    return await Instructions.create({
        id: uuid.v4(),
        description: data.description,
        step: data.step,
        recipeId: data.recipeId
    })
 
}

const updateInstruction = async (id, data) => {
    return await Instructions.update(data, {
        where: {
            id
        }
    })
}

const deleteInstruction = async (id) => {
    return await Instructions.destroy({
        where: {
            id
        }
    }) 
}


module.exports = {
    createInstruction,
    getAllInstructions,
    getInstructionById,
    updateInstruction,
    deleteInstruction
}