var jsonfile = require('jsonfile')
var express = require('express');
var router = express.Router();
var file = require('../users.json');
var index = '../views/index.hbs'
var fs = require('fs');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AirBnB', nickname: file.utilisateurs[0].nickname });
  
  fs.readFile('./users.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
      // RECUPERER LA PAGE INDEX, REPERER L'ELEMENT BOUTTON D'INSCRIPTION'
      // PUIS QUAND IL CHARGE => ENVOI SUR LA FONCTION INSCRIPTION
      // RECUPERATION CHAMPS TEXTES => NOUVELLE ENTREE DANS LE JSON
    //  var Connexion = document.getElementById('signup');
     // Connexion.onclick = function(){
      var jsonici = [];
      jsonici.push(file)
      console.log(jsonici);
      //    jsonici[0].utilisateurs.push({nickname: "req.query.name" })
        //   console.log(jsonici[1].nickname);
        //    console.log(jsonici)
        //    console.log(file.users[0].nickname) 
            var stringuifier = JSON.stringify(jsonici[0]);   
            console.log(stringuifier)         
          fs.writeFileSync('./users.json', stringuifier, 'utf8', function(err){
            if(err) console.error(err); return;
        });               console.log(file)
      }} /* } */ )

  /*
  fs.writeFile('../users.json', stringuifier, 'utf8',function(err){
    if(err) throw err;})
*/

  function getlog(){
  res.redirect('page', 
  { 
    login : req.body.name,
    password : req.body.password
  }); } 
});

/* GET home page. */

 router.get('/', function(req, res, next) {
  var obj = "./users.json";
  function init()
  {    var name = document.getElementByID("name").value; 
        window.alert(name);

  name.onclick = Test("name");
   /* name.onclick = function(){
    window.alert(name); 
    return false;*/
  }


function Test(name)
{
  var test = document.getElementByID(name).value; 
  window.alert(name);
} 
  
  res.render('/index',{ nickname: req.query.name });
  window.onload = init;
 /* 
  for (var key in obj) {window.alert("aaaa");
    if (key == nickname) { window.alert("aaaa")}
    else{ obj.users.push(nickname = "hahahah" )}
    
     */ 
   
      
      
    }
  
); 

//resultat reservation hotel
router.get('/hotel/reservation/confirm/:id/:nom/:boolean', function(req, res, next) {
  //createdDestinations[req.params.nom]
  var modif = createdDestinations[req.params.nom][req.params.id];
  createdDestinations[req.params.nom][req.params.id].reserved = 1;
  //console.log(createdDestinations)
  //console.dir(jsonfile.readFileSync(file))
  jsonfile.writeFile(file, createdDestinations, function (err){
    console.error(err);
  })
  res.render('confirm.ejs', {id: req.params.id, nom: req.params.nom, boolean: req.params.boolean,
                             hotel: createdDestinations[req.params.nom][req.params.id]});
});


router.get('/page', function(req, res, next) {
  nickname: req.query.name
  console.log(JSON.stringify(file.users.nickname));
  
  res.render('page', 
  {    //data : obj['users'][0]['nickname'] 
  
  });
});


router.get('/formulaire', function(req, res, next) {
  res.render('formulaire', {});
});

router.post('/form', function(req, res, next) {
  
});


module.exports = router;




