// Crie uma query que faça a remoção do item cebola em todos os sanduíches.

// Crie uma query que retorne o nome e ingredientes de todos os documentos.

db.produtos.updateMany({}, { $pull: { ingredientes: "cebola" } });

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
