SELECT
c.ContactName AS `Nome de contato`,
s.ShipperName AS `Empresa que fez o envio`,
o.OrderDate AS `Data do pedido`
FROM
w3schools.customers AS c,
w3schools.shippers AS s,
w3schools.orders AS o
WHERE (c.CustomerID = o.CustomerID)
AND (s.ShipperID = o.ShipperID)
AND s.ShipperName IN ('Speedy Express', 'United Package')
ORDER BY `Nome de contato`, `Empresa que fez o envio`, `Data do pedido`;
