const Sequelize = require('sequelize');


const sequelize = new Sequelize(
  "postgres://loren:loren123@todo-db.cdhpjitrv68d.ap-south-1.rds.amazonaws.com:5432/todo_db"
);

const todo =require('./models/todo.js')(sequelize,Sequelize)

const db ={
    Sequelize,
    sequelize,
    todo
};

db.sequelize.sync();
module.exports = db;