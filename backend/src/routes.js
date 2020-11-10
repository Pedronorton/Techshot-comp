import express from 'express'
import UserController from './controller/UserController.js'

const userController = new UserController;

const routes = express.Router()

routes.use(express.json())


routes.get('/', userController.getAll)

routes.post('/', userController.insert)

routes.post('/delete/:id', userController.deleteUser)

routes.put('/:id', userController.edit)



export default routes