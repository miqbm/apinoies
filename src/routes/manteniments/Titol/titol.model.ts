import { Schema, model } from "mongoose";

const TitolSchema = new Schema(
	{
		Titol: {
			type: String,
			required: true,
			unique: true,
		},
		TeAny: {
			type: Boolean,
			default: false,
		},
		TeMes: {
			type: Boolean,
			default: false,
		},
		TeSetmana: {
			type: Boolean,
			default: false,
		},
	},
	{
		versionKey: false,
		collection: "Titols",
	},
);

export default model("Titols", TitolSchema);
