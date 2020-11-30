import { RequestHandler } from "express";
import Noia from "./noies.model";

const NOIA_INEXISTENT = {
	missatge: "Aquesta noia no existeix",
};

// Obte totes les noies
export const getNoies: RequestHandler = async (req, res) => {
	try {
		const noies = await Noia.find().limit(50);
		res.json(noies);
	} catch (error) {
		res.json(error);
	}
};

// Obte una noia segons el seu Id
export const getNoia: RequestHandler = async (req, res) => {
	try {
		const noia = await Noia.findById(req.params.id);
		res.json(noia);
	} catch (error) {
		res.status(404).json(NOIA_INEXISTENT);
	}
};

// Inserta una noia
export const postNoia: RequestHandler = async (req, res) => {
	try {
		const noia = new Noia(req.body);
		const noiaPosted = await noia.save();
		res.json(noiaPosted);
	} catch (error) {
		res.json(error);
	}
};

// Elimina una noia
export const deleteNoia: RequestHandler = async (req, res) => {
	try {
		const noia = await Noia.findByIdAndDelete(req.params.id);
		if (noia) res.json({ missatge: "Noia eliminada" });
		else res.status(404).json(NOIA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Actualitza una noia
export const updateNoia: RequestHandler = async (req, res) => {
	try {
		const noia = await Noia.findByIdAndUpdate(req.params.id, req.body, {
			new: true, //{new: true} és per que em retorni l'object ja actualitzat. Si està a false, em retorna l'objecte inicial abans de modificar
		});
		if (noia) res.json(noia);
		else res.status(404).json(NOIA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};
