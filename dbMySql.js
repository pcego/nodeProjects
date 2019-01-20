/* driver conexão mysql */
const mysql = require("mysql")

/* criando o objeto conexão */
const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'senha',
    database : 'node' // coloque aqui o nome do seu banco de dados
});

/* Função para inserção na base de dados - recebe um array e um função callback*/
function insert(post, callback){

    var sql = 'insert into posts(autor, conteudo) values (?, ?);'; // instrução sql para inserção
    connection.query(sql, post, callback);
    connection.end(); // fechando a conexão

}

module.exports = {insert}