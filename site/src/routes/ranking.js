var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get("/", function (req, res) {
    rankingController.testar(req, res);
});

router.get('/listar', (req, res) => {
    rankingController.listar(req, res)
})

router.post('/cadastrar', (req, res) => {
    rankingController.cadastrar(req, res)
})

router.get('/buscarAcertos/:idUsuario', (req, res) => {
    rankingController.buscarAcertos(req, res)
})

module.exports = router;