module.exports = (call) => {
    let contact = {
        name: call.dataValues.ZNAME,
        phone: null,
        email: null,
        notes: null,
        geocode: {
            lat: call.dataValues.ZLATTITUDE,
            lng: call.dataValues.ZLONGITUDE
        }
    };

    // map additional information
    call.dataValues.additionalInformations.forEach(row => {
        let typeId = row.dataValues.ZTYPE;
        //let type = row.dataValues.additionalInformationType.dataValues;

        switch(typeId) {
            case 1:
                contact.phone = row.dataValues.ZVALUE;
            break;
            case 2:
                contact.email = row.dataValues.ZVALUE;
            break;
            case 3:
                contact.notes = row.dataValues.ZVALUE;
            break;
        }
    });

    return contact;
}
