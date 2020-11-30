import { RequestHandler } from "express";
import BellesaCos from "./bellesacos.model";

const COS_INEXISTENT = {
	missatge: "Aquest tipus de bellesa de cos no existeix",
};

// Obté tots els tipus de bellesa de cos
export const getBellesaCossos: RequestHandler = async (req, res) => {
	try {
		const bellesa = await BellesaCos.find();
		res.json(bellesa);
	} catch (error) {
		res.json(error);
	}
};

//Obte un tipus de bellesa de cos segons id
export const getBellesaCos: RequestHandler = async (req, res) => {
	try {
		const bellesa = await BellesaCos.findById(req.params.id);
		if (bellesa) res.json(bellesa);
		else res.status(404).json(COS_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

//Elimina un tipus de bellesa de cara
export const deleteBellesaCos: RequestHandler = async (req, res) => {
	try {
		const bellesa = await BellesaCos.findByIdAndDelete(req.params.id);
		if (bellesa) res.json("El tipus de bellesa de cos s'ha eliminat!");
		else res.status(404).json(COS_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Inserta un tipus de bellesa de cara
export const addBellesaCos: RequestHandler = async (req, res) => {
	try {
		const bellesa = new BellesaCos(req.body);
		const bellesaNova = await bellesa.save();
		if (bellesaNova) res.json(bellesa);
	} catch (error) {
		res.json(error);
	}
};

// Actualitza un tipus de bellesa de cos
export const updateBellesaCos: RequestHandler = async (req, res) => {
	try {
		const bellesa = await BellesaCos.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			},
		);
		if (bellesa) res.json(bellesa);
		else res.status(404).json(COS_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};
