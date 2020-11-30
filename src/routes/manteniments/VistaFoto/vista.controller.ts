import { RequestHandler } from "express";
import Vista from "./vista.model";

const VISTA_INEXISTENT = {
	missatge: "Aquesta vista no existeix",
};

// Inserta una vista
export const addVista: RequestHandler = async (req, res) => {
	try {
		const vista = new Vista(req.body);
		const vistaNova = await vista.save({ validateBeforeSave: true });
		res.json(vistaNova);
	} catch (error) {
		if (error.code === 11000) res.json("Aquesta vista ja existeix");
		else res.status(500).json(error);
	}
};

// Obté totes les vistes
export const getVistes: RequestHandler = async (req, res) => {
	try {
		const vista = await Vista.find();
		res.json(vista);
	} catch (error) {
		res.json(error);
	}
};

// Obte una vista segons el seu id
export const getVista: RequestHandler = async (req, res) => {
	try {
		const vista = await Vista.findById(req.params.id);
		if (vista) res.json(vista);
		else res.status(404).json(VISTA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Elimina una vista segons el seu id
export const deleteVista: RequestHandler = async (req, res) => {
	try {
		const vista = await Vista.findByIdAndDelete(req.params.id);
		if (vista) res.json("Vista eliminada!");
		else res.status(404).json(VISTA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Update vista
export const updateVista: RequestHandler = async (req, res) => {
	try {
		const vista = await Vista.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(vista);
	} catch (error) {
		if (error.code === 11000) res.json("Aquesta vista ja existeix");
		else res.status(500).json(error);
	}
};
