SELECT
p.ProductName AS Produto,
p.Price AS Preço
FROM
w3schools.products p,
w3schools.order_details od
WHERE p.ProductID = od.ProductID
AND od.Quantity > 80
ORDER BY Produto;
