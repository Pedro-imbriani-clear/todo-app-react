const express = require('express')

module.exports = function (server) {

    //API ROUTERS
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../app/todo/todoService')
    todoService.register(router, '/todo')
}