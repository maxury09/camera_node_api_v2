const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('camera_node_api_db', 'node_db_user', 'aApG9ckIczg9Ieokm4cpUObpvEwqRlET', {
host: 'dpg-cs4ev78gph6c73c006rg-a',
dialect: 'postgres',
});

module.exports = sequelize;