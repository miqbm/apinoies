import { Schema, model } from "mongoose";

const VistaSchema = new Schema(
	{
		Vista: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		versionKey: false,
		collection: "VistaFoto",
	},
);

export default model("VistaFoto", VistaSchema);
