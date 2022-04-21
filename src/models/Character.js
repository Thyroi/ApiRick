const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('character', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       name:{
           type: DataTypes.STRING,
           allowNull: false
       },
       image:{
            type: DataTypes.STRING,
       },
       status:{
              type: DataTypes.STRING,
       }
    },
    {
        timestamps: false
    })
};

