import { RequestHandler } from "express";
import TipusCabell from "./cabelltipus.model";

const TIPUS_INEXISTENT = {
	missatge: "Aquest tipus de cabell no existeix",
};

// Inserta un tipus de vcabellabell
export const addTipusrCabell: RequestHandler = async (req, res) => {
	try {
		const tipus = new TipusCabell(req.body);
		const tipusNou = await tipus.save({ validateBeforeSave: true });
		res.json(tipusNou);
	} catch (error) {
		if (error.code === 11000) res.json("Aquest tipus de cabell ja existeix");
		else res.status(500).json(error);
	}
};

// Obté tots els tipus de cabell
export const getTipusCabells: RequestHandler = async (req, res) => {
	try {
		const tipus = await TipusCabell.find();
		res.json(tipus);
	} catch (error) {
		res.json(error);
	}
};

// Obte un tipus de cabell segons el seu id
export const getTipusCabell: RequestHandler = async (req, res) => {
	try {
		const tipus = await TipusCabell.findById(req.params.id);
		if (tipus) res.json(tipus);
		else res.status(404).json(TIPUS_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Elimina un tipus de cabell segons el seu id
export const deleteTipusCabell: RequestHandler = async (req, res) => {
	try {
		const tipus = await TipusCabell.findByIdAndDelete(req.params.id);
		if (tipus) res.json("Tipus de cabell eliminat!");
		else res.status(404).json(TIPUS_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Update tipus de cabell
export const updateTipusCabell: RequestHandler = async (req, res) => {
	try {
		const tipus = await TipusCabell.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(tipus);
	} catch (error) {
		if (error.code === 11000) res.json("Aquest tipus de cabell ja existeix");
		else res.status(500).json(error);
	}
};
