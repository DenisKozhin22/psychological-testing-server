import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRouter from './Routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import quizRouter from './Routes/quiz.routes.js'
import adminRouter from './Routes/admin.routes.js'

dotenv.config()

mongoose
	.connect(process.env.DB_URL)
	.then(() => {
		console.log('DB CONNECT')
	})
	.catch(err => {
		console.log('DB ERROR', err)
	})

const app = express()
const corsOptions = {
	origin: [/^(.*)/],
	credentials: true,
	optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())

// Routes
app.use('/auth', authRouter)
app.use('/quiz', quizRouter)
app.use('/admin', adminRouter)

app.listen(process.env.PORT || 5000, err => {
	if (err) {
		return console.log(err)
	}
	console.log('Server OK')
})
