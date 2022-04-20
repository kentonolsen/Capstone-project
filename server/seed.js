require('dotenv').config()

const { CONNECTION_STRING } = process.env

const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists save_response;
        drop table if exists users;

        create table users (
            user_id serial primary key,
            username varchar(20)
        );
        create table save_response (
            save_response_id serial primary key,
            user_id integer not null references users(user_id),
            user_question varchar(100),
            response varchar(50)
        );`).then(() => {
            console.log('Database seeded')
            res.status(200)
        }).catch(err => console.log('Error seeding database', err))
    }
}