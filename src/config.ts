import dotenv from "dotenv";
dotenv.config();

export default {
	MONGO_DATABASE: process.env.MONGO_DATABASE || "noies",
	MONGO_USER: process.env.MONGO_USER /*|| "miquel"*/,
	MONGO_PASSWORD: process.env.MONGO_PASSWORD /*|| "Wild0036"*/,
	MONGO_PORT: process.env.MONGO_PORT || 27017,
	MONGO_HOST: process.env.MONGO_HOST || "127.0.0.1",
	PORT: process.env.PORT || 3000,
};
