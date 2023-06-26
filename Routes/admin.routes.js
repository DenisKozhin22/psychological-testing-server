import { Router } from 'express'
import AdminController from '../Controllers/Admin.controller.js'

const adminRouter = new Router()

adminRouter.get('/:department', AdminController.getGroups)
adminRouter.get('/:department/:group', AdminController.getStudents)
adminRouter.get('/:department/:group/:studentID', AdminController.getStudentResult)

export default adminRouter
