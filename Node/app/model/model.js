// const {client} = require("../config/DB.js");

const {client} = require("../config/db.js");

module.exports= class model{
    static inserTask(tasks){
        return client.query('insert into todolist(task,is_completed) values ($1,$2)',[tasks.task,false])
    }
}