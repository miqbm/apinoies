import { Schema, model } from "mongoose";

const TipusCabellSchema = new Schema(
	{
		TipusCabell: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		versionKey: false,
		collection: "CabellTipus",
	},
);

export default model("CabellTipus", TipusCabellSchema);
