import { Schema, model } from "mongoose";

const ConySchema = new Schema(
	{
		TipusCony: {
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
		collection: "Cony",
		versionKey: false,
	},
);

export default model("Cony", ConySchema);
