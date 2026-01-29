const express = require('express')
const routes = express.Router();

routes.get('/', async (req, res) => {
    res.json({status: "active", message: "I am online"})
})

module.exports = routes;