-- SELECT jobs.JOB_TITLE AS Cargo,
-- ROUND(AVG(employees.SALARY), 2) AS 'Média salarial',
-- CASE 
-- WHEN ROUND(AVG(employees.SALARY), 2) BETWEEN 2000 AND 5800 THEN 'Júnior'
-- WHEN ROUND(AVG(employees.SALARY), 2) BETWEEN 5801 AND 7500 THEN 'Pleno'
-- WHEN ROUND(AVG(employees.SALARY), 2) BETWEEN 7501 AND 10500 THEN 'Sênior'
-- WHEN ROUND(AVG(employees.SALARY), 2) > 10500 THEN 'CEO'
-- END AS 'Senioridade'
-- FROM hr.jobs
-- JOIN hr.employees
-- ON jobs.JOB_ID = employees.JOB_ID
-- GROUP BY Cargo
-- ORDER BY ROUND(AVG(employees.SALARY), 2), Cargo;

#########################################################################################

SELECT (SELECT JOB_TITLE FROM hr.jobs WHERE JOB_ID = employees.JOB_ID) AS Cargo,
ROUND(AVG(SALARY), 2) AS 'Média salarial',
CASE 
WHEN ROUND(AVG(SALARY), 2) BETWEEN 2000 AND 5800 THEN 'Júnior'
WHEN ROUND(AVG(SALARY), 2) BETWEEN 5801 AND 7500 THEN 'Pleno'
WHEN ROUND(AVG(SALARY), 2) BETWEEN 7501 AND 10500 THEN 'Sênior'
WHEN ROUND(AVG(SALARY), 2) > 10500 THEN 'CEO'
END AS 'Senioridade'
FROM hr.employees
GROUP BY Cargo
ORDER BY ROUND(AVG(employees.SALARY), 2), Cargo;
