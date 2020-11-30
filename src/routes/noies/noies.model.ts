import { Schema, model } from "mongoose";

const NoiaSchema = new Schema(
	{
		Nom: {
			type: String,
			required: true,
		},
		Cognoms: { Type: String },
		DataNaixement: Date,
		Pes: Number,
		Alcada: Number,
		Cintura: Number,
		Copa: String,
		TamanyPit: Number,
		TetesNaturals: Boolean,
		Porno: {
			type: Boolean,
			default: false,
		},
		Observacions: String,
		puntuacioTotal: Number,
		PuntuacioPromig: Number,
		Ranking: Number,
		Pais: Schema.Types.ObjectId,
		Alies: [
			{
				Nom: String,
				Cognoms: String,
			},
		],
		Fotos: [
			{
				Arxiu: String,
				IDSet: Number,
			},
		],
		Sets: [
			{
				Descripcio: String,
				ID: Number,
			},
		],
		Titols: [
			{
				Any: Number,
				Mes: Number,
				Setmana: Number,
				Titol: Schema.Types.ObjectId,
			},
		],
	},
	{
		collection: "Noia",
		versionKey: false,
	},
);

export default model("Noia", NoiaSchema);
