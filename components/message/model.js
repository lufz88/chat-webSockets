import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
	user: String,
	message: {
		type: String,
		required: true,
	},
	date: Date,
});

const Model = mongoose.model('Message', mySchema);

export default Model;
