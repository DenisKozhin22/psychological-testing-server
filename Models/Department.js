import mongoose from 'mongoose'

const DepartmentShema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
	},
	groups: [
		{
			value: {
				type: String,
			},
		},
	],
})

mongoose.set('strictQuery', true)
export default mongoose.model('Department', DepartmentShema)
