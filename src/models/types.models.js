const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const Types = db.define('types',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true, //? esto es igual a serial
        primaryKey: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true
    }
},{
    //? evita que sequelize cree la columna createdAT y udpateAT
    timestamps: false
})

module.exports = Types