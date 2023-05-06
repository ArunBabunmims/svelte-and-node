const model = require("../model/model.js")

module.exports ={
    insertTask:(req,res)=>{
        Promise.all([model.inserTask(req.body)]).then(result =>{
            console.log("NOde:::::::::::",res)

        })
    }
}