import { RequestHandler } from "express";
import Roba from "./roba.model";

const ROBA_INEXISTENT = {
	missatge: "Aquesta roba no existeix",
};

//Obtencio de tota la roba
export const getRobes: RequestHandler = async (req, res) => {
	try {
		const roba = await Roba.find();
		res.json(roba);
	} catch (error) {
		res.json(error);
	}
};

// Obtencio d'una peça de roba segons el seu id
export const getRoba: RequestHandler = async (req, res) => {
	try {
		const roba = await Roba.findById(req.params.id);
		if (roba) res.json(roba);
		else res.status(404).json(ROBA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Insercio d'una peça de roba
export const insertaRoba: RequestHandler = async (req, res) => {
	try {
		const roba = new Roba(req.body);
		const robaInsertada = await roba.save();
		if (robaInsertada) res.json(robaInsertada);
	} catch (error) {
		res.json(error);
	}
};

// Eliminar roba
export const deleteRoba: RequestHandler = async (req, res) => {
	try {
		const roba = await Roba.findByIdAndDelete(req.params.id);
		if (roba) res.json("Roba eliminada");
		else res.status(404).json(ROBA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Actualitzar roba
export const updateRoba: RequestHandler = async (req, res) => {
	try {
		const roba = await Roba.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(roba);
	} catch (error) {
		res.json(error);
	}
};
