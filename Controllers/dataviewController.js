const Service = require("../Models/Service.model")
const DataType = require("../Models/DataType.model")
const Purpose = require("../Models/Purpose.model")


exports.allServiceDatatypes = async (req, res, next) => {
    let datatypes = await DataType.find({provenance: req.body.serviceId})
    res.json(datatypes)
}

exports.addRemoveServiceDatatypes = async (req,res,next)=>{
    const service = await Service.findOne({_id:req.body.serviceId})
    const filterPurpose = service.purposes.filter(purpose=>{
        if(purpose == req.body.purpose){
            return purpose
        }
    })
    const purpose = await Purpose.findOne({_id:filterPurpose[0]})
    if(purpose.datatypes.includes(req.body.datatype)){
         const index = purpose.datatypes.findIndex(datatype=>{
            return datatype == req.body.datatype})
        purpose.datatypes.splice(index,1)
        purpose.save()
    }else{
        purpose.datatypes.push(req.body.datatype);
        purpose.save()
    }
}


