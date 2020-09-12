// Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.

// totalFlights = db.voos.find({
//   "empresa.nome": "LATAM AIRLINES BRASIL",
//   natureza: "Doméstica"
// }).count();

db.resumoVoos.insert({
  "empresa": "LATAM AIRLINES BRASIL",
  "totalVoosDomesticos": db.voos.count({
    "empresa.nome": "LATAM AIRLINES BRASIL",
    natureza: "Doméstica"
  }),
});

db.resumoVoos.find({
  empresa: "LATAM AIRLINES BRASIL"
  },{
    _id: 0
    }
).limit(1);
