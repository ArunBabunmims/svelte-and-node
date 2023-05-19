const model = require("../model/model.js");
const { uploadImage } = require('../config/imageKit.js');
const crypto = require('crypto');

module.exports = {
    insertTask: (req, res) => {
        console.log("Task::::::::::::::::", req.body);
        Promise.all([model.inserTask(req.body)]).then(result => {

        })

        res.status(200).json({ message: "Successfully Added Task" })
    },

    insertProduct: async (req, res) => {

        try {
            let name = crypto.randomUUID();
            let img = await uploadImage(name, req.body.base64String);

            console.log('img:::::::::::::::::::::::::::', img.url)

            Promise.all([model.inserProduct(req.body, img.url)]).then(result => {
            })
            res.status(200).json({ message: "Successfully Added Product" });
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "Not Found" });
        }
    },


    viewProduct: (req, res) => {
        try {
            const search = req.query.search ?? '';
            Promise.all([model.viewProduct(search)]).then(result => {
                res.status(200).json(result[0].rows)
            })
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" })

        }

    },

    deleteProduct: (req, res) => {
        console.log("Delete::::::::::::::::", req.query.id);
        try {

            Promise.all([model.deleteProduct(req.query.id)]).then(result => {
                res.status(200).json(result[0].rows)
            })

        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" })

        }

    },

    updateProduct: (req, res) => {
        console.log("Updateddddddd::::::::::::::::", req.body);
        try {

            Promise.all([model.updateProduct(req.body)]).then(result => {
                res.status(200).json({ message: "Product Successfully Updated " });

            })

        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" })

        }

    },

    viewCart: (req, res) => {
        try {
            console.log("req.query.id::::::",req.query.id);
            const id = req.query.id ?? '';
            console.log("cartIddddddd", id);
            // Promise.all([model.viewProduct(id)]).then(result => {
            //     res.status(200).json(result[0].rows)
            // })
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" })

        }

    },

    insertUser:async (req,res)=>{
        try{

            let data = await model.insertUser(req.body);
            res.status(200).json({ message: "Successfully Added Product" });
            console.log("insert ka ",data);
        }
        catch(err){
            res.status(500).json({ message: "Internal Server Error" })
        }
    },


    addToCart:async(req,res)=>{
        try{
            let data = await model.addToCart(req.body);
            console.log("Data : ",req.body);
            res.status(200).json({message: "Successfully Added to Cart"})
        }
        catch(err){
            res.status(500).json({ message: "Internal Server Error" })
        }
    },

    getCart:async(req,res)=>{
        try{
            let data = await model.getCartCount(req.query.userId);
            let data2 = await model.getCartData(req.query.userId);
            const count = data.rows[0]
            const json = data2.rows
            return res.status(200).json({count, json})
        }
        catch(err){
            res.status(500).json({ message: "Internal Server Error" })
        }
    },



    verifyLogin:async(req,res)=>{
        try{
            const fpass = req.body.upassword;
            console.log('fpass::::::::',fpass);
            console.log('checklogin:::::',req.body);
            let data = await model.checkLogin(req.body);
            console.log('enteredddddddddddd',data);
            console.log('datapassword::',data.rows[0].password);
            const dpass = data.rows[0].password;

            if (fpass === dpass) {
                console.log("Passwords match!");
                res.status(200).json({ message: "Successfully Added Product" });
              } else {
                console.log("Passwords do not match!");
                res.status(500).json({ message: "Internal Server Error" })
              }
        }
        catch(err){

        }
    },

    addQuantity: (req, res) => {
        console.log("addQuantity::::::::::::::::");
        try {

            Promise.all([model.addQuantity(req.query.id)]).then(result => {
                res.status(200).json(result[0].rows)
            })

        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" })

        }

    },
    removeQuantity: (req, res) => {
        console.log("removeQuantity::::::::::::::::");
        try {

            Promise.all([model.removeQuantity(req.query.id)]).then(result => {
                res.status(200).json(result[0].rows)
            })

        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" })

        }

    }
}

