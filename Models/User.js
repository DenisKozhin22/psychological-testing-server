import mongoose from 'mongoose'

const UserShema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
	},
	userSurName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	passwordHash: {
		type: String,
		required: true,
	},
	department: {
		type: String,
		required: true,
	},
	group: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		required: true,
		default: false,
	},
})
mongoose.set('strictQuery', true)
export default mongoose.model('User', UserShema)
