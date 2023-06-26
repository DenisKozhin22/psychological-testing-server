import UserModel from '../Models/User.js'
import DepartmentModel from '../Models/Department.js'
import ResultModel from '../Models/Result.js'

class AdminController {
	async getGroups(req, res, next) {
		try {
			console.log(req.params.department)
			const department = await DepartmentModel.findOne({
				name: req.params.department.replace('-', ' '),
			})
			return res.json(department.groups)
		} catch (error) {
			console.log(error)
		}
	}
	async getStudents(req, res) {
		try {
			const students = await UserModel.find(
				{
					department: req.params.department.replace('-', ' '),
					group: req.params.group,
				},
				null,
				{ sort: { userSurName: 1 } },
			)
			return res.json(students)
		} catch (error) {
			console.log(error)
		}
	}
	async getStudentResult(req, res) {
		try {
			const studentResult = await ResultModel.findOne({
				userID: req.params.studentID,
			})
			console.log(studentResult)
			return res.json(studentResult)
		} catch (error) {
			console.log(error)
		}
	}
}

export default new AdminController()
