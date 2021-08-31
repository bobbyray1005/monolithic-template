const express = require('express')
const apiServerApp = express()

const routers = require('./route')

// lets secure our express api
const cors = require('cors')
const helmet = require('helmet')

apiServerApp.use(cors())
apiServerApp.use(helmet())
apiServerApp.set('trust proxy',1)

//it is now ok to bring in session like cookies here

apiServerApp.use("/",routers)

module.exports = apiServerApp