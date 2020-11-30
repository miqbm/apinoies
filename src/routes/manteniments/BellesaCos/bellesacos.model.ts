import { Schema, model } from "mongoose";

const BellesaCos = new Schema(
	{
		Cos: {
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
		collection: "BellesaCos",
		versionKey: false,
	},
);

export default model("BellesaCos", BellesaCos);
