import { RequestHandler } from "express";
import ColorCabell from "./cabellcolor.model";

const COLOR_INEXISTENT = {
	missatge: "Aquest color de cabell no existeix",
};

// Inserta un color de vabell
export const addColorCabell: RequestHandler = async (req, res) => {
	try {
		const color = new ColorCabell(req.body);
		const colorNou = await color.save({ validateBeforeSave: true });
		res.json(colorNou);
	} catch (error) {
		//Codi = 11000 -> Intent de duplicar algun camp unique
		if (error.code === 11000) res.json("Aquest color de cabell ja existeix");
		else res.status(500).json(error);
	}
};

// Obté tots els colors de cabell
export const getColorsCabell: RequestHandler = async (req, res) => {
	try {
		const color = await ColorCabell.find();
		res.json(color);
	} catch (error) {
		res.json(error);
	}
};

// Obte un color de cabell segons el seu id
export const getColorCabell: RequestHandler = async (req, res) => {
	try {
		const color = await ColorCabell.findById(req.params.id);
		if (color) res.json(color);
		else res.status(404).json(COLOR_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Elimina un color de cabell segons el seu id
export const deleteColorCabell: RequestHandler = async (req, res) => {
	try {
		const color = await ColorCabell.findByIdAndDelete(req.params.id);
		if (color) res.json("Color de cabell eliminat!");
		else res.status(404).json(COLOR_INEXISTENT);
	} catch (error) {
		res.json(error);
	}
};

// Update color de cabell
export const updateColorCabell: RequestHandler = async (req, res) => {
	try {
		const color = await ColorCabell.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(color);
	} catch (error) {
		if (error.code === 11000) res.json("Aquest color de cabell ja existeix");
		else res.status(500).json(error);
	}
};
