import ValueOrientationsModel from '../Models/ValueOrientations.js'
import ResultModel from '../Models/Result.js'

class QuizController {
	async getValueOrientations(req, res) {
		try {
			const model = await ValueOrientationsModel.findOne()
			return res.json(model)
		} catch (error) {
			console.log(error)
		}
	}

	async createQuiz(req, res) {
		try {
			const data = req.body
			const doc = await new ValueOrientationsModel(data)
			doc.save()
			return res.json(doc)
		} catch (error) {
			console.log(error)
		}
	}

	async createResultsValueOrientations(req, res) {
		try {
			const data = {
				result: req.body.result,
				userID: req.user.id,
				userName: req.user.userName,
			}
			const doc = await new ResultModel(data)
			doc.save()
			return res.json(doc)
		} catch (error) {
			console.log(error)
		}
	}

	async getResultsValueOrientations(req, res) {
		try {
			const { id } = req.user

			const resultsDoc = await ResultModel.findOne({
				userID: id,
			})

			return res.json(resultsDoc)
		} catch (error) {
			console.log(error)
		}
	}
}
export default new QuizController()
