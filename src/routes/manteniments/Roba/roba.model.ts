import mongoose, { Schema, model } from "mongoose";

const RobaSchema = new Schema(
	{
		Roba: {
			type: String,
			required: true,
		},
		TipusRoba: {
			type: mongoose.Types.ObjectId,
			required: true,
		},
	},
	{
		collection: "Roba",
		versionKey: false,
	},
);

export default model("Roba", RobaSchema);
