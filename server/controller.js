const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    questionFunction: (req, res) => {
        let randInt = Math.floor((Math.random() * 20) + 1)
        res.status(200).send(responseObj[randInt])
        // console.log(randInt)
    },
    userFunction: (req, res) => {
        let newName = req.body.username
        console.log(req.body.username)
        // sequelize.query(`
        // insert into users(username)
        // values (${newName})
        // `)
    }
}
const responseObj = {
    1: 'It is certain',
    2: 'It is decidedly so',
    3: 'Without a doubt',
    4: 'Yes definitely',
    5: 'You may rely on it',
    6: 'As I see it, yes',
    7: 'Most likely',
    8: 'Outlook good',
    9: 'Yes',
    10: 'Signs point to yes',
    11: 'Reply hazy, try again',
    12: 'Ask again later',
    13: 'Better not tell you now',
    14: 'Cannot predict now',
    15: 'Concentrate and ask again',
    16: "Don't count on it",
    17: 'My reply is no',
    18: 'My sources say no',
    19: 'Outlook not so good',
    20: 'Very doubtful'
}