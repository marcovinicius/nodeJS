module.exports = function(app) {


    app.get('/frontend', function(req, res) {

        var connection = app.app.config.database();

        var query = app.app.models.conteudoModel;
        query.getConteudo(connection,
            function(error, results, fields) {
                console.log(error, results)
                res.render('paginas/frontend', { dados: results });
            });

        query.on('error', function(error) {
            console.log("[mysql error:]".error);
        });
    });

}