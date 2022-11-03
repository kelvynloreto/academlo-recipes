const { DataTypes } = require('sequelize');

const db = require('../utils/database');

//? models
const Categories = require('./categories.models');
const Users = require('./users.models');


const Recipes = db.define('recipes', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT, //? el .TEXT no tiene longitud minina y el STRING si
        allowNull: false,
        //? valida que la longitud minima sea de 5
        validate: {
            min: 5
        }
    },
    urlImg: {
        type: DataTypes.STRING,
        field: "url_img ",
        //? valida que sea una url el dato
        validate: {
            // isUrl: true
        }
    },
    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    portions: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    origin: {
        type: DataTypes.STRING
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    //? las FK de sequelize tienen ciertas reglas:
    //? Debe contener la tabla a la que hace referencia en singular
    //? Debe terminar con el subfijo Id

    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "user_id",
        references: {
            key: 'id',
            model: Users
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id",
        references: {
            key: 'id',
            model: Categories
        }
    }

})

module.exports = Recipes