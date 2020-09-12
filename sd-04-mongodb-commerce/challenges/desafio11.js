// Crie uma query que faça tanto a inserção dos elementos combo e tasty no array tags de todos os sanduíches quanto a ordenação dos elementos de tags em ordem alfabética ascendente.

// Crie uma query que retorne o nome e tags de todos os documentos.

db.produtos.updateMany(
  {},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } }
);

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });