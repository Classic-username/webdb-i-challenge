const express = require('express');

const acctRouter = require('./routers/account-router')

const server = express();

server.use(express.json());
server.use('/api/accounts', acctRouter)

module.exports = server;