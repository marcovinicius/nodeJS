module.exports = function() {

    //Busca todos os usuários sem filtro
    this.getUsuarios = function(connection, callback) {
        connection.query("SELECT * FROM usuario", callback);
    }

    //Busca usuários por e-mail
    this.getUsuarioId = function(id, connection, callback) {
            connection.query("SELECT *FROM usuario WHERE id =" + id, callback);
        }
        //Busca usuários por id
    this.getUsuarioEmail = function(email, connection, callback) {
            connection.query("SELECT *FROM usuario WHERE id = " + email, callback);
        }
        //Insere um novo usuário na base
    this.serUsuario = function(usuario, connection, callback) {
        connection.query('insert into usuario set?', usuario);
    }

    return this;
}