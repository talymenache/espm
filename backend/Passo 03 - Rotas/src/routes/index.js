"use strict";
class IndexRoute {
    async index(req, res) {
        res.render("index/index");
    }
    async teste(req, res) {
        let nome = req.query["nome"];
        console.log("Você enviou o nome: " + nome);
        let email = req.query["email"];
        console.log("Você enviou o email: " + email);
        res.send("Eu sou um texto...");
    }
}
module.exports = IndexRoute;
//# sourceMappingURL=index.js.map