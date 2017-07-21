var Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('additionalInformation', {
        'Z_PK': {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        'Z_ENT': {
            type: Sequelize.INTEGER,
        },
        'Z_OPT': {
            type: Sequelize.INTEGER,
        },
        'ZBOOLEAN': {
            type: Sequelize.INTEGER,
        },
        'ZNUMBER': {
            type: Sequelize.INTEGER,
        },
        'ZCALL': {
            type: Sequelize.INTEGER,
        },
        'ZTYPE': {
            type: Sequelize.INTEGER,
        },
        'ZDATE': {
            type: Sequelize.DATE,
        },
        'ZVALUE': {
            type: Sequelize.INTEGER,
        },
    }, {
        tableName: 'ZADDITIONALINFORMATION',
    });
}
