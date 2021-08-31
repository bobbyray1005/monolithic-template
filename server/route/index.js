const express = require('express')

const router = express.Router()

//declare all route here or import them as middleware

router.get('/', (req,res) => {
    res.status(200).json({success: true, message: "welcome to the API that powers this solution", data: null})
})

module.exports = router
