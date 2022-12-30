import { DataTypes, Sequelize } from 'sequelize';
import { UserModel } from '../Models/User.js';

const sequelize = new Sequelize('login', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT+1',
  },
  logging: false,
});

export const User = UserModel(sequelize, DataTypes);

export const initDb = () => {
  return sequelize.sync({ force: true }).then(_ => {

    User.create({
        email : 'admin@admin.com',
        pwd : 'admin',
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore earum totam! Ipsa nulla dignissimos cupiditate porro iusto, dolor quam, maiores quasi ducimus nam quaerat sit voluptate itaque omnis. Ad."
    }).then(user => {
        console.log({user})
    })

  });
};
