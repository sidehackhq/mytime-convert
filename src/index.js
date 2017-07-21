var Sequelize = require('sequelize');

var Models = {
    AdditionalInformation: require('./models/additional-information'),
    AdditionalInformationType: require('./models/additional-information-type'),
    Call: require('./models/call'),
};

var Utilities = {
    toContact: require('./utilities/toContact')
};

module.exports = (db, options) => {
    if(typeof db === 'object') {
        options = db;
    } else {
        options = options || {};
        options.db = db;
    }

    if(!options.db) throw 'options.database is required';

    let sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: options.db,
        define: {
            timestamps: false,
        },
        logging: options.logging || false
    });

    // define models
    const AdditionalInformation = Models.AdditionalInformation(sequelize);
    const AdditionalInformationType = Models.AdditionalInformationType(sequelize);
    const Call = Models.Call(sequelize);

    // associations
    AdditionalInformation.belongsTo(AdditionalInformationType, {
        foreignKey: 'ZTYPE',
    });
    Call.hasMany(AdditionalInformation, {
        foreignKey: 'ZCALL'
    });

    return sequelize
        .authenticate()

        // process calls
        .then(() => {
            return Call.findAll({
                include: [
                    {
                        model: AdditionalInformation,
                        include: [
                            {
                                model: AdditionalInformationType
                            }
                        ]
                    }
                ]
            })
                // convert to contacts
                .then(calls => {
                    return calls.map(call => {
                        return Utilities.toContact(call);
                    });
                })
            ;
        })
    ;
}
