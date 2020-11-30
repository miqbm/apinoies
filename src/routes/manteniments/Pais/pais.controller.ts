import { RequestHandler } from "express";
import Pais from "./pais.model";

const PAIS_INEXISTENT = {
	missatge: "Aquest tipus de cabell no existeix",
};

// Inserta un pais
export const addPais: RequestHandler = async (req, res) => {
	try {
		const pais = new Pais(req.body);
		const paisNou = await pais.save({ validateBeforeSave: true });
		res.json(paisNou);
	} catch (error) {
		if (error.code === 11000) res.json("Aquest pais ja existeix");
		else res.status(500).json(error);
	}
};

// Obté tots paisos
export const getPaisos: RequestHandler = async (req, res) => {
	try {
		const pais = await Pais.find();
		res.json(pais);
	} catch (error) {
		res.json(error);
	}
};

// Obte un pais segons el seu id
export const getPais: RequestHandler = async (req, res) => {
	try {
		const pais = await Pais.findById(req.params.id);
		if (pais) res.json(pais);
		else res.status(404).json(PAIS_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Elimina un pais segons el seu id
export const deletePais: RequestHandler = async (req, res) => {
	try {
		const pais = await Pais.findByIdAndDelete(req.params.id);
		if (pais) res.json("Pais eliminat!");
		else res.status(404).json(PAIS_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Update pais
export const updatePais: RequestHandler = async (req, res) => {
	try {
		const pais = await Pais.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(pais);
	} catch (error) {
		if (error.code === 11000) res.json("Aquest pais ja existeix");
		else res.status(500).json(error);
	}
};
