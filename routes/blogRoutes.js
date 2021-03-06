var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    global.db.findAll((error, docs)=> {
        if (error) {
            return console.log(error);
        };
        res.render('blog/index', {docs});
    });
});

router.get('/detalhes/:id', function(req, res, next){

    var id = req.params.id
    global.db.findOne(id, (error, doc)=> {
        if (error) {
            return console.log(error);
        };
        res.render('blog/samplePost', {doc});
    });

});

router.get('/criar', function(req, res, next) {
    res.render('blog/postCreate');
});

router.get('/contato', function(req, res, next) {
    res.render('blog/contactUs');
});

router.get('/post', function(req, res, next) {
    res.render('blog/samplePost');
});

router.get('/sobre', function(req, res, next) {
    res.render('blog/aboutUs');
});

router.post('/processar', function(req, res, next) {

    const autor = req.body.autor
    const conteudo = req.body.conteudo
    /* observe a referencia ao arquivo de conexão dbMySql */
    global.dbMySql.insert([autor, conteudo], (err, result)=>{
        if(err){
            return console.log(err)
        }
        res.redirect('/');
    })
});

router.get('/editar/', function(req, res, next) {

})

module.exports = router