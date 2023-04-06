// module.exports = (sequelize, DataTypes) => {

const Coworking = (sequelize, DataTypes) => {
    return sequelize.define('Coworking', {
        // Model attributes are defined here
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
        },
        superficy: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.JSON,
            allowNull: false
        },
        address: {
            type: DataTypes.JSON,
        }
      }, {
        // Other model options go here
      })
}

module.exports = Coworking