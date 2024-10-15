const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('camera_node_api_db', 'postgres', '150203', {
host: 'localhost',
dialect: 'postgres',
});

module.exports = sequelize;