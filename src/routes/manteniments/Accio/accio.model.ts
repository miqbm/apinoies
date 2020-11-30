import { Schema, model } from "mongoose";

const AccioSchema = new Schema(
	{
		Accio: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		versionKey: false,
		collection: "Accions",
	},
);

export default model("Accions", AccioSchema);
