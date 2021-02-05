module.exports = function() {
    this.getConteudo = function(connection, callback) {
        connection.query("SLECT * FORM conteudo", callback);
    }

    this.getConteudoFront = function(connection, callback) {
        connection.query("SLECT * FORM conteudo WERE categoria = 'frontend'", callback);
    }

    this.getConteudoBack = function(connection, callback) {
        connection.query("SLECT * FORM conteudo WERE categoria = 'backend'", callback);
    }

    this.salvarConteudo = function(coteudo, connection, callback) {
        connection.query('insert into conteudo set?', conteudo);
    }

    return this;
}