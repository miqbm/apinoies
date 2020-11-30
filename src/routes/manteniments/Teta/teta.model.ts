import { Schema, model } from "mongoose";

const TetaSchema = new Schema(
	{
		TamanyTetes: {
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
		collection: "Teta",
		versionKey: false,
	},
);

export default model("Teta", TetaSchema);
