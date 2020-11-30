import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

(async () => {
	try {
		const mongooseOpcions: ConnectionOptions = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			// user: config.MONGO_USER,
			// pass: config.MONGO_PASSWORD,
		};
		const db = await mongoose.connect(
			`mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`,
			mongooseOpcions,
		);
		console.log(
			`Connexió al port ${db.connection.port} a la base de dades ${db.connection.name}`,
		);
	} catch (error) {
		console.log(error);
	}
})();
