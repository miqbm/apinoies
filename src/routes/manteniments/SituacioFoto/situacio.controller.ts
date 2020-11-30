import { RequestHandler } from "express";
import Situacio from "./situacio.model";

const SITUACIO_INEXISTENT = {
	missatge: "Aquesta situació no existeix",
};

// Inserta una situacio
export const addSituacio: RequestHandler = async (req, res) => {
	try {
		const situacio = new Situacio(req.body);
		const situacioNova = await situacio.save({ validateBeforeSave: true });
		res.json(situacioNova);
	} catch (error) {
		if (error.code === 11000) res.json("Aquesta situacio ja existeix");
		else res.status(500).json(error);
	}
};

// Obté totes les situacions
export const getSituacions: RequestHandler = async (req, res) => {
	try {
		const situacio = await Situacio.find();
		res.json(situacio);
	} catch (error) {
		res.json(error);
	}
};

// Obte una situacio segons el seu id
export const getSituacio: RequestHandler = async (req, res) => {
	try {
		const situacio = await Situacio.findById(req.params.id);
		if (situacio) res.json(situacio);
		else res.status(404).json(SITUACIO_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Elimina una situacio segons el seu id
export const deleteSituacio: RequestHandler = async (req, res) => {
	try {
		const situacio = await Situacio.findByIdAndDelete(req.params.id);
		if (situacio) res.json("Situació eliminada!");
		else res.status(404).json(SITUACIO_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Update situacio
export const updateSituacio: RequestHandler = async (req, res) => {
	try {
		const situacio = await Situacio.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(situacio);
	} catch (error) {
		if (error.code === 11000) res.json("Aquesta situacio ja existeix");
		else res.status(500).json(error);
	}
};
