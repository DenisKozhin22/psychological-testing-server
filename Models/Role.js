import mongoose from 'mongoose'

const RoleShema = new mongoose.Schema({
	value: {
		type: String,
		unique: true,
		default: 'Студент',
	},
})

mongoose.set('strictQuery', true)
export default mongoose.model('Role', RoleShema)
