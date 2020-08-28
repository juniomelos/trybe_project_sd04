SELECT 
p.ProductName AS Produto,
(SELECT MIN(Quantity) FROM w3schools.order_details WHERE ProductID = p.ProductID) AS Mínima,
(SELECT MAX(Quantity) FROM w3schools.order_details WHERE ProductID = p.ProductID) AS Máxima,
(SELECT ROUND(AVG(Quantity), 2) FROM w3schools.order_details WHERE ProductID = p.ProductID) AS Média
FROM
w3schools.products AS p
GROUP BY p.ProductID
HAVING Média > 20.00
ORDER BY Média, Produto;

###########################################################

-- SELECT 
-- p.ProductName AS Produto,
-- MIN(od.Quantity) AS Mínima,
-- MAX(od.Quantity) AS Máxima,
-- ROUND(AVG(od.Quantity), 2) AS Média
-- FROM
-- w3schools.products AS p
-- JOIN
-- w3schools.order_details AS od
-- ON od.ProductID = p.ProductID
-- GROUP BY p.ProductID
-- HAVING Média > 20.00
-- ORDER BY Média, Produto;
