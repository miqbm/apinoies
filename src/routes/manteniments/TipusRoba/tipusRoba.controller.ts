import { RequestHandler } from "express";
import TipusRoba from "./tipusRoba.model";

const TIPUS_INEXISTENT = {
	missatge: "Aquest tipus de roba no existeix",
};

// Inserta un tipus de roba
export const addTipusRoba: RequestHandler = async (req, res) => {
	try {
		const tipus = new TipusRoba(req.body);

		const tipusNou = await tipus.save({ validateBeforeSave: true });
		res.json(tipusNou);
	} catch (error) {
		//Codi = 11000 -> Intent de duplicar algun camp unique
		if (error.code === 11000) res.json("Aquest tipus de roba ja existeix");
		else res.status(500).json(error);
	}
};

// Obté tots els tipus de roba
export const getTipusRobes: RequestHandler = async (req, res) => {
	try {
		const tipus = await TipusRoba.find();
		res.json(tipus);
	} catch (error) {
		res.json(error);
	}
};

// Obte un tipus de roba segons el seu id
export const getTIpusRoba: RequestHandler = async (req, res) => {
	try {
		const tipus = await TipusRoba.findById(req.params.id);
		if (tipus) res.json(tipus);
		else res.status(404).json(TIPUS_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Elimina un tipus de roba segons el seu id
export const deleteTipusRoba: RequestHandler = async (req, res) => {
	try {
		const tipus = await TipusRoba.findByIdAndDelete(req.params.id);
		if (tipus) res.json("Tipus de roba eliminat!");
		else res.status(404).json(TIPUS_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Update tipus de roba
export const updateTipusRoba: RequestHandler = async (req, res) => {
	try {
		const tipus = await TipusRoba.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(tipus);
	} catch (error) {
		//Codi = 11000 -> Intent de duplicar algun camp unique
		if (error.code === 11000) res.json("Aquest tipus de roba ja existeix");
		else res.status(500).json(error);
	}
};
