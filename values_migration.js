const axios = require('axios');
const express = require('express');

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var urlbd = "mongodb://localhost:27017/";


const app = express();


url = "https://services.arcgis.com/CCZiGSEQbAxxFVh3/arcgis/rest/services/COVID19_ConcelhosDiarios/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

// Make a request for a user with a given ID
async function getf(){axios.get(url)
  .then(function (response) {
    // handle success
    var casos = response.data.features;
    console.log(casos.length);
    console.log('mamen');
    

   /*  for(var i = 0; i < casos.length ; i++){
        var concelho = casos[i].attributes.Concelho;
        var casos_juntos = casos[i].attributes.ConfirmadosAcumulado;
 */
        MongoClient.connect(urlbd, function(err, db) {
            if (err) throw err;
            var dbo = db.db("covid");
            /* var myobj = { cidade: concelho, casos_acumulados: casos_juntos }; */
            dbo.collection("casos").insertMany(casos);
          });
          
   /*  } */
   

   
    
    

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}










  // listen for requests
app.listen(3001, () => {
    getf();
});