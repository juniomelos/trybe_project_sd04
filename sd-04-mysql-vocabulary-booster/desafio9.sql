SELECT CONCAT(e.FirstName, ' ', e.LastName) AS `Nome completo`,
COUNT(o.EmployeeID) AS `Total de pedidos`
FROM
w3schools.employees e,
w3schools.orders o
WHERE e.EmployeeID = o.EmployeeID
GROUP BY e.EmployeeID
ORDER BY `Total de pedidos`;
