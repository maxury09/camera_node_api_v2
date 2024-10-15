const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('api', 'postgres', '150203', {
host: 'localhost',
dialect: 'postgres',
});

module.exports = sequelize;