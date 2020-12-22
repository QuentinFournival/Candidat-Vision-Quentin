const Service = require("../Models/Service.model")
const DataType = require("../Models/DataType.model")
const Purpose = require("../Models/Purpose.model")
const data = require("../data/data")

/**
 * displayPurposes
 *
 * Copyright 2020 Visions
 * Original Authors: Felix Bole
 * Created Date: 11/12/2020
 * Date Updated: ~
 *
 * Displays a list of a service's purposes and its details
 */

exports.displayPurposes = async (req, res, next) => {
    // Coder la logique de cette fonction pour afficher convenablement la page des traitements
    const tableau = []
    const service = await Service.findOne({ _id: req.body.serviceId })
    const serviceDatatype = await DataType.find({_id:{$in:service.datatypes}})
        for(const purposeId of service.purposes){
        const purpose = await Purpose.findOne({ _id: purposeId })
        const purposeDataType = await DataType.find({_id:{$in:purpose.datatypes}})
        const dataTypeFilter = serviceDatatype.filter(datatype=>{
            if(!purpose.datatypes.includes(datatype._id)){
               return datatype
            }
        })

        // const datause = {
        //     purpose: {
        //         id: purposeId,
        //         name: purpose.name,
        //         description: purpose.description
        //     },
        //     selectedDatatypes: purposeDataType,
        //     unselectedDatatypes: dataTypeFilter
        // }
        // tableau.push(datause)
    }

    try {
        res.render("purposes", {
            serviceId: service._id,
            serviceName: service.name,
            datauses: tableau
        });
    } catch (err) {
        next(err)
    }
}


/*  recherche par model   */
exports.getAll = (req, res) => {
    Service.find({}).then(results => {
        res.send(results);
    })
}

/* */

