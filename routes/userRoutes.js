
const {registerNewUser} = require('../controllers/userController')
const express = require('express')
const userRouter= express.Router()
// userRouter.get('/getUser',registerNewUser)

userRouter.post('/register',registerNewUser)
// userRouter.put('/putUser',registerNewUser)
// userRouter.delete('/deleteUser',registerNewUser)
// userRouter.update('/updateUser',registerNewUser)
module.exports = {userRouter}

