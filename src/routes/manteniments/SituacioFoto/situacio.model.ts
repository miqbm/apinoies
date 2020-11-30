import { Schema, model } from "mongoose";

const SituacioSchema = new Schema(
	{
		Situacio: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		versionKey: false,
		collection: "SituacioFoto",
	},
);

export default model("SituacioFoto", SituacioSchema);
