import { RequestHandler } from "express";
import Postura from "./postura.model";

const POSTURA_INEXISTENT = {
	missatge: "Aquesta postura no existeix",
};

// Inserta una postura
export const addPostura: RequestHandler = async (req, res) => {
	try {
		const postura = new Postura(req.body);
		const posturaNova = await postura.save({ validateBeforeSave: true });
		res.json(posturaNova);
	} catch (error) {
		if (error.code === 11000) res.json("Aquesta postura ja existeix");
		else res.status(500).json(error);
	}
};

// Obté totes les postures
export const getPostures: RequestHandler = async (req, res) => {
	try {
		const postura = await Postura.find();
		res.json(postura);
	} catch (error) {
		res.json(error);
	}
};

// Obte una postura segons el seu id
export const getPostura: RequestHandler = async (req, res) => {
	try {
		const postura = await Postura.findById(req.params.id);
		if (postura) res.json(postura);
		else res.status(404).json(POSTURA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Elimina una postura segons el seu id
export const deletePostura: RequestHandler = async (req, res) => {
	try {
		const postura = await Postura.findByIdAndDelete(req.params.id);
		if (postura) res.json("Postura eliminada!");
		else res.status(404).json(POSTURA_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Update postura
export const updatePostura: RequestHandler = async (req, res) => {
	try {
		const postura = await Postura.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(postura);
	} catch (error) {
		if (error.code === 11000) res.json("Aquesta postura ja existeix");
		else res.status(500).json(error);
	}
};
