SELECT
n.ContactName AS Nome,
n.Country AS País,
COUNT(c.ContactName) AS `Número de compatriotas`
FROM
w3schools.customers n,
w3schools.customers c
WHERE n.ContactName <> c.ContactName
AND n.Country = c.Country
GROUP BY n.CustomerID
ORDER BY Nome;
