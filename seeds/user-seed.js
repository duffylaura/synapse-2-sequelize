const { User } = require("../models");

const userSeed = [
    {
        "username": "CRockstar",
        "define": "Professional Rugby Player",
        "email": "CR@gmail.com",
        "password":"test1234567"
    },
    {
        "username": "Afia Blay",
        "define": "A Journalist / Software Engineering Hybrid",
        "email": "AB@gmail.com",
        "password": "Storyline123!"
    }
];

const seedUsers = () => User.bulkCreate(userSeed);

module.exports = seedUsers;