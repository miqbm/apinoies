import { RequestHandler } from "express";
import Tetes from "./teta.model";

const TETES_INEXISTENTS = {
	missatge: "Aquest tipus de tetes no existeix",
};

// Obté tots els tipus de tetes
export const getTetes: RequestHandler = async (req, res) => {
	try {
		const tetes = await Tetes.find();
		res.json(tetes);
	} catch (error) {
		res.json(error);
	}
};

//Obte un tipus de tetes segons id
export const getTeta: RequestHandler = async (req, res) => {
	try {
		const tetes = await Tetes.findById(req.params.id);
		if (tetes) res.json(tetes);
		else res.status(404).json(TETES_INEXISTENTS);
	} catch (error) {
		res.json(error);
	}
};

//Elimina un tipus de tetes
export const deleteTetes: RequestHandler = async (req, res) => {
	try {
		const tetes = await Tetes.findByIdAndDelete(req.params.id);
		if (tetes) res.json("El tipus de tetes s'ha eliminat!");
		else res.status(404).json(TETES_INEXISTENTS);
	} catch (error) {
		res.json(error);
	}
};

// Inserta un tipus de tetes
export const addTetes: RequestHandler = async (req, res) => {
	try {
		const tetes = new Tetes(req.body);
		const tetesNoves = tetes.save();
		if (tetesNoves) res.json(tetes);
	} catch (error) {
		res.json(error);
	}
};

// Actualitza un tipus de tetes
export const updateTetes: RequestHandler = async (req, res) => {
	try {
		const tetes = await Tetes.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (tetes) res.json(tetes);
		else res.status(404).json(TETES_INEXISTENTS);
	} catch (error) {
		res.json(error);
	}
};
