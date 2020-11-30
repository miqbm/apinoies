import app from "./app";
import "./database";

app.listen(app.get("port"), () => {
	console.log(`Server escoltant al port ${app.get("port")}`);
});
