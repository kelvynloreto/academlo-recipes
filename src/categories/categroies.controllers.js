const Categories = require("../models/categories.models");

const getAllCategories = async () => {
    return await Categories.findAll()
}

const getCategoryById = async()=>{
return await Categories.findOne({
    where:{
        id
    }
})
}
const createCategory = async (name) => {
    return await Categories.create({
        name
    })
}
const deleteCategory = async (id) => {
    return await Categories.destroy({
        where: {
            id
        }
    })
}


module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    getCategoryById
}