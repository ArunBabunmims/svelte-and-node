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

    static viewProduct(search = '') {
        const searchStr = `%${search}%`;
        return client.query(
          'SELECT * FROM product WHERE active = true AND (UPPER(CONCAT(product_name, brand_name, specification, product_category)) LIKE UPPER($1) OR LOWER(CONCAT(product_name, brand_name, specification, product_category)) LIKE LOWER($1))',
          [searchStr]
        );
      }
      

    static deleteProduct(id)
    {
        console.log("deleteidddddddddd::",id);
        return client.query('DELETE FROM product WHERE id = $1', [id]);
    }

    static updateProduct({id,product_name,product_category,brand_name,prize,specification})
    {

        console.log("updateId:::::::::::",typeof id,id); 
        console.log("updateproduct_name:::::::::::",typeof product_name,product_name); 
        return client.query('UPDATE product SET product_name=$2, product_category=$3, brand_name=$4, prize=$5, specification=$6 WHERE id=$1', [id, product_name, product_category, brand_name, prize, specification]);

    }

    static insertUser(json){
        console.log("CLICK",json.user_name);
        let a = [json.user_name,json.email,json.password]
        console.log("CLICK",typeof json);
        return client.query('insert into public.user(user_name,email,password) values ($1,$2,$3)',a);
    }

    static addToCart(json){
        console.log("jsonData:::",json);
        let cart = [json.userId, json.id]
        return client.query('insert into user_cart(user_id,product_id) values ($1,$2)',cart);
    }

    static getCartCount(userId){
        console.log("jsonData:::",userId);
        return client.query('SELECT COUNT(*) as count FROM user_cart WHERE user_id = $1',[userId]);
    }

    static checkLogin(json){
        console.log("loginmodel:::::::",json);
        let data = [json.uemail,json.upassword];
        return client.query('select password from public.user where email=$1',[json.uemail])
    }

    static getCartData(userId){
        return client.query(`SELECT uc.user_id, uc.quantity ,p.* FROM user_cart uc 
        INNER JOIN product p 
        ON p.id = uc.product_id 
        WHERE user_id = $1 
        AND p.active = true and uc.active = true;`,[userId])
    }

    static addQuantity(id)
    {
        console.log("addQuantity::",id);
        return client.query('UPDATE user_cart SET quantity = quantity + 1  WHERE id = $1', [id]);
    }

    static removeQuantity(id)
    {
        console.log("removeQuantity::",id);
        return client.query('UPDATE user_cart SET quantity = quantity - 1  WHERE id = $1', [id]);
    }
}