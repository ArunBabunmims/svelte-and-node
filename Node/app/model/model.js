// const {client} = require("../config/DB.js");

const {client} = require("../config/db.js");

module.exports= class model{
    static inserTask(tasks){
        console.log("product::::",tasks)
        return client.query('insert into todolist(task) values ($1)',[tasks.text])
    }

    
    static inserProduct({product_name,product_category,brand_name,prize,specification },url){
     
        console.log("img.url::::",url)
        return client.query('insert into product(product_name,product_category,brand_name,prize,image,specification) values ($1,$2,$3,$4,$5,$6)',
        [product_name,product_category,brand_name,prize,url,specification])
    }

    static viewProduct(search = '')
    {
        // return client.query('select * from product where active=true and UPPER(CONCAT(product_name,brand_name,specification,product_category)) like $1',['%' + search + '%'])

        return client.query('SELECT * FROM product WHERE active=true AND (UPPER(CONCAT(product_name,brand_name,specification,product_category)) LIKE $1 OR LOWER(CONCAT(product_name,brand_name,specification,product_category)) LIKE $2)', ['%' + search + '%', '%' + search + '%'])


    }
}