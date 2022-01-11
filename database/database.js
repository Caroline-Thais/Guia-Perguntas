const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'Passei1t', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;