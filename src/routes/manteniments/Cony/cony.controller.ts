import { RequestHandler } from "express";
import Cony from "./cony.model";

const CONY_INEXISTENT = {
	missatge: "Aquest tipus de cony no existeix",
};

// Obté tots els tipus de conys
export const getConys: RequestHandler = async (req, res) => {
	try {
		const cony = await Cony.find();
		res.json(cony);
	} catch (error) {
		res.json(error);
	}
};

//Obte un tipus de cony segons id
export const getCony: RequestHandler = async (req, res) => {
	try {
		const cony = await Cony.findById(req.params.id);
		if (cony) res.json(cony);
		else res.status(404).json(CONY_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

//Elimina un tipus de cony
export const deleteCony: RequestHandler = async (req, res) => {
	try {
		const cony = await Cony.findByIdAndDelete(req.params.id);
		if (cony) res.json("El tipus de cony s'ha eliminat!");
		else res.status(404).json(CONY_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Inserta un tipus de cony
export const addCony: RequestHandler = async (req, res) => {
	try {
		const cony = new Cony(req.body);
		const conyNoou = await cony.save();
		if (conyNoou) res.json(cony);
	} catch (error) {
		res.json(error);
	}
};

export const updateCony: RequestHandler = async (req, res) => {
	try {
		const cony = await Cony.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (cony) res.json(cony);
		else res.status(404).json(CONY_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};
