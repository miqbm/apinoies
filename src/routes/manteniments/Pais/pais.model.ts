import { Schema, model } from "mongoose";

const PaisSchema = new Schema(
	{
		Pais: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		versionKey: false,
		collection: "Pais",
	},
);

export default model("Pais", PaisSchema);
