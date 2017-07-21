var Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('call', {
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
        'ZDELETEDCALL': {
            type: Sequelize.INTEGER,
        },
        'ZLOCATIONAQUIRED': {
            type: Sequelize.INTEGER,
        },
        'ZLOCATIONAQUISITIONATTEMPTED': {
            type: Sequelize.INTEGER,
        },
        'ZPICTURE': {
            type: Sequelize.INTEGER,
        },
        'ZUSER': {
            type: Sequelize.INTEGER,
        },
        'ZMOSTRECENTRETURNVISITDATE': {
            type: Sequelize.DATE,
        },
        'ZLATTITUDE': {
            type: Sequelize.DECIMAL,
        },
        'ZLONGITUDE': {
            type: Sequelize.DECIMAL,
        },
        'ZAPARTMENTNUMBER': {
            type: Sequelize.STRING,
        },
        'ZCITY': {
            type: Sequelize.STRING,
        },
        'ZCONTACTIDENTIFIER': {
            type: Sequelize.STRING,
        },
        'ZHOUSENUMBER': {
            type: Sequelize.STRING,
        },
        'ZLOCATIONLOOKUPTYPE': {
            type: Sequelize.STRING,
        },
        'ZNAME': {
            type: Sequelize.STRING,
        },
        'ZSTATE': {
            type: Sequelize.STRING,
        },
        'ZSTREET': {
            type: Sequelize.STRING,
        },
        'ZCOLOR': {
            type: Sequelize.STRING,
        },
    }, {
        tableName: 'ZCALL',
    });
}
