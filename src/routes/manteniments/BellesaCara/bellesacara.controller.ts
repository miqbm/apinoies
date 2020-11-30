import { RequestHandler } from "express";
import BellesaCara from "./bellesacara.model";

const CARA_INEXISTENT = {
	missatge: "Aquest tipus de bellesa de cara no existeix",
};

// Obté tots els tipus de bellesa de cara
export const getBellesaCares: RequestHandler = async (req, res) => {
	try {
		const bellesa = await BellesaCara.find();
		res.json(bellesa);
	} catch (error) {
		res.json(error);
	}
};

//Obte un tipus de bellesa de cara segons id
export const getBellesaCara: RequestHandler = async (req, res) => {
	try {
		const bellesa = await BellesaCara.findById(req.params.id);
		if (bellesa) res.json(bellesa);
		else res.status(404).json(CARA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

//Elimina un tipus de bellesa de cara
export const deleteBellesaCara: RequestHandler = async (req, res) => {
	try {
		const bellesa = await BellesaCara.findByIdAndDelete(req.params.id);
		if (bellesa) res.json("El tipus de bellesa de cara s'ha eliminat!");
		else res.status(404).json(CARA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Inserta un tipus de bellesa de cara
export const addBellesaCara: RequestHandler = async (req, res) => {
	try {
		const bellesa = new BellesaCara(req.body);
		const bellesaNova = await bellesa.save();
		if (bellesaNova) res.json(bellesa);
	} catch (error) {
		res.json(error);
	}
};

export const updateBellesaCara: RequestHandler = async (req, res) => {
	try {
		const bellesa = await BellesaCara.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			},
		);
		if (bellesa) res.json(bellesa);
		else res.status(404).json(CARA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};
