import { Schema, model } from "mongoose";

const ColorCabellSchema = new Schema(
	{
		ColorCabell: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		versionKey: false,
		collection: "CabellColor",
	},
);

export default model("CabellColor", ColorCabellSchema);
