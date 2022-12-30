export const UserModel = (sequelize, DataTypes) => {
    return sequelize.define(
      'User',
      {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        email : {
            type : DataTypes.STRING,
            unique : {msg : 'that email already exist !'},
            allowNull : false
        },
        pwd : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        description : {
          type : DataTypes.STRING,
        }
      },
      {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false,
      }
    );
  };
  