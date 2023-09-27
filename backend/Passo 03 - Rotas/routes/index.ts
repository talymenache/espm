import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index");
	}

	public async teste(req: app.Request, res: app.Response) {

		let nome= req.query["nome"];
		console.log("Você enviou o nome: " + nome);

		let email= req.query["email"];
		console.log("Você enviou o email: " + email);

		res.send("Eu sou um texto...");
	}
}

export = IndexRoute;
