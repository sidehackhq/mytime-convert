var Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('additionalInformationType', {
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
        'ZALWAYSSHOWN': {
            type: Sequelize.INTEGER,
        },
        'ZDEFAULTBOOLEAN': {
            type: Sequelize.INTEGER,
        },
        'ZDEFAULTNUMBER': {
            type: Sequelize.INTEGER,
        },
        'ZHIDDEN': {
            type: Sequelize.INTEGER,
        },
        'ZTYPE': {
            type: Sequelize.INTEGER,
        },
        'ZUSER': {
            type: Sequelize.INTEGER,
        },
        'ZDEFAULTDATE': {
            type: Sequelize.DATE,
        },
        'ZORDER': {
            type: Sequelize.FLOAT,
        },
        'ZDEFAULTVALUE': {
            type: Sequelize.STRING,
        },
        'ZNAME': {
            type: Sequelize.STRING,
        },
        'ZUUID': {
            type: Sequelize.STRING,
        },
    }, {
        tableName: 'ZADDITIONALINFORMATIONTYPE',
    });
}
