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
    global.db.insert({autor, conteudo}, (err, result)=>{
        if(err){
            return console.log(err)
        }
        res.redirect('/');
    })
});

module.exports = router