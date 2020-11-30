import { Schema, model } from "mongoose";

const PosturaSchema = new Schema(
	{
		Postura: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		versionKey: false,
		collection: "PosturaFoto",
	},
);

export default model("PosturaFoto", PosturaSchema);
