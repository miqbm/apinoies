import { Schema, model } from "mongoose";

const TipusRobaSchema = new Schema(
	{
		TipusRoba: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		versionKey: false,
		collection: "TipusRoba",
	},
);

export default model("TipusRoba", TipusRobaSchema);
