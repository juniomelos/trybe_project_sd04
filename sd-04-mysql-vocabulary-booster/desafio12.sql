SELECT
CONCAT(x.FIRST_NAME, ' ', x.LAST_NAME) AS `Nome completo funcionário 1`,
x.SALARY AS `Salário funcionário 1`,
x.PHONE_NUMBER AS `Telefone funcionário 1`,
CONCAT(y.FIRST_NAME, ' ', y.LAST_NAME) AS `Nome completo funcionário 2`,
y.SALARY AS `Salário funcionário 2`,
y.PHONE_NUMBER AS `Telefone funcionário 2`
FROM
hr.employees x,
hr.employees y
WHERE x.JOB_ID = y.JOB_ID
AND CONCAT(x.FIRST_NAME, ' ', x.LAST_NAME) <> CONCAT(y.FIRST_NAME, ' ', y.LAST_NAME)
ORDER BY `Nome completo funcionário 1`, `Nome completo funcionário 2`;
