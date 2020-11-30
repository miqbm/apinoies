import { RequestHandler } from "express";
import Accio from "./accio.model";

const ACCIO_INEXISTENT = {
	missatge: "Aquesta acció no existeix",
};

// Inserta una acció
export const addAccio: RequestHandler = async (req, res) => {
	try {
		const accio = new Accio(req.body);
		const accioNova = await accio.save({ validateBeforeSave: true });
		res.json(accioNova);
	} catch (error) {
		if (error.code === 11000) res.json("Aquesta acció ja existeix");
		else res.status(500).json(error);
	}
};

// Obté totes les accions
export const getAccions: RequestHandler = async (req, res) => {
	try {
		const accio = await Accio.find();
		res.json(accio);
	} catch (error) {
		res.json(error);
	}
};

// Obte una accio segons el seu id
export const getAccio: RequestHandler = async (req, res) => {
	try {
		const accio = await Accio.findById(req.params.id);
		if (accio) res.json(accio);
		else res.status(404).json(ACCIO_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Elimina una accio segons el seu id
export const deleteAccio: RequestHandler = async (req, res) => {
	try {
		const accio = await Accio.findByIdAndDelete(req.params.id);
		if (accio) res.json("Acció eliminada!");
		else res.status(404).json(ACCIO_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Update accio
export const updateAccio: RequestHandler = async (req, res) => {
	try {
		const accio = await Accio.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(accio);
	} catch (error) {
		if (error.code === 11000) res.json("Aquesta accio ja existeix");
		else res.status(500).json(error);
	}
};
