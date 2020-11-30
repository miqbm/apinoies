import { RequestHandler } from "express";
import Titol from "./titol.model";

const TITOL_INEXISTENT = {
	missatge: "Aquest títol no existeix",
};

// Inserta un títol
export const addTitol: RequestHandler = async (req, res) => {
	try {
		const titol = new Titol(req.body);
		const titolNou = await titol.save({ validateBeforeSave: true });
		res.json(titolNou);
	} catch (error) {
		if (error.code === 11000) res.json("Aquest títol ja existeix");
		else res.status(500).json(error);
	}
};

// Obté tote els títols
export const getTitols: RequestHandler = async (req, res) => {
	try {
		const titol = await Titol.find();
		res.json(titol);
	} catch (error) {
		res.json(error);
	}
};

// Obte un títol segons el seu id
export const getTitol: RequestHandler = async (req, res) => {
	try {
		const titol = await Titol.findById(req.params.id);
		if (titol) res.json(titol);
		else res.status(404).json(TITOL_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Elimina un títol segons el seu id
export const deleteTitol: RequestHandler = async (req, res) => {
	try {
		const titol = await Titol.findByIdAndDelete(req.params.id);
		if (titol) res.json("Títol eliminat!");
		else res.status(404).json(TITOL_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Update Títol
export const updateTitol: RequestHandler = async (req, res) => {
	try {
		const titol = await Titol.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(titol);
	} catch (error) {
		if (error.code === 11000) res.json("Aquest títol ja existeix");
		else res.status(500).json(error);
	}
};
