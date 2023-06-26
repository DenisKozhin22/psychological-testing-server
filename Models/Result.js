import mongoose from 'mongoose'
const { Schema } = mongoose

const resultModel = new Schema({
	userName: { type: String },
	userSurName: { type: String },
	userID: { type: String },
	result: [[Number]],
})

export default mongoose.model('result', resultModel)
