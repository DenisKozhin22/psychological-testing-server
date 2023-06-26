import { Router } from 'express'
import checkAuth from '../utils/checkAuth.js'
import QuizController from '../Controllers/Quiz.controller.js'
const quizRouter = new Router()


quizRouter.post('/add-quiz', QuizController.createQuiz)
quizRouter.get('/value-orientations', QuizController.getValueOrientations)

quizRouter.post(
	'/results-value-orientations',
	checkAuth,
	QuizController.createResultsValueOrientations,
)

quizRouter.get('/results-value-orientations', checkAuth, QuizController.getResultsValueOrientations)

export default quizRouter
