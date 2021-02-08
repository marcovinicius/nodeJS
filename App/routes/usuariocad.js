const { check, validationResults } = require("express-validator");
const crypto = require('crypto');

module.exports = function(app) {

    app.get('/usuariocad', function(req, res) {
        res.render('paginas/usuariocad', { validacao: { erros: {}, }, dados: {} });
    });

    app.post('/usuario/salvar', [
        check('nome', 'Nome é obrigatório!').exists(),
        check('usuario', 'Usuário é obrigatório!').exists().isLength({ min: 5, max: 15 }),
        check('senha', 'A senha precisa ter no mínimo 5 digitos e no máximo 15!').exists().isLength({ min: 5, max: 15 }),
        check('email', 'Email é obrigatório!').isEmail().normalizeEmail(),
    ], function(req, res) {

        var usuario = req.body;
        var erros = validationResults(req);

        var senhaCriptografada = crypto.createHash("md5").update(usuario.senha).digest("hex");

        usuario.senha = senhaCriptografada;

        if (!erros.isEmpty()) {
            res.render("paginas/usuariocad", { validacao: erros, dados: usuario })
            console.log(erros);
            return;
        }


        var connection = app.app.config.database();
        var usuarioModel = app.app.models.usuarioModel;
        usuarioModel.setUsuario(usuario, connection, function(error, results) {

        });

        usuarioModel.getUsuarios(connection,
            function(error, results, fields) {
                console.log(error, results)
                res.render('paginas/usuarios', { dados: results });
            });

    });
}