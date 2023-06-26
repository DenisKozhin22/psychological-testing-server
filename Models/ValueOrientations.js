import mongoose from 'mongoose'

const ValueOrientationsShema = new mongoose.Schema({
	name: String,
	blocks: [
		{
			questions: [
				{
					options: [
						{
							text: String,
							value: Number,
						},
						{
							text: String,
							value: Number,
						},
					],
				},
			],
		},
	],
})

mongoose.set('strictQuery', true)
export default mongoose.model('ValueOrientations', ValueOrientationsShema)
