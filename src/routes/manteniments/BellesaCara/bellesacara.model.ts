import { Schema, model } from "mongoose";

const BellesaCara = new Schema(
	{
		Cara: {
			type: String,
			required: true,
			unique: true,
		},
		Puntuacio: {
			type: Number,
			default: 0,
		},
	},
	{
		collection: "BellesaCara",
		versionKey: false,
	},
);

export default model("BellesaCara", BellesaCara);
