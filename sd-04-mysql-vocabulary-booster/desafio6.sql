SELECT
(SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) FROM hr.employees WHERE EMPLOYEE_ID = JH.EMPLOYEE_ID) AS `Nome completo`,
(SELECT JOB_TITLE FROM hr.jobs WHERE JOB_ID = JH.JOB_ID) AS Cargo,
START_DATE AS 'Data de início do cargo',
(SELECT DEPARTMENT_NAME FROM hr.departments WHERE DEPARTMENT_ID = JH.DEPARTMENT_ID) AS Departamento
FROM hr.job_history AS JH
WHERE EMPLOYEE_ID <> 0 OR JOB_ID <> ''
ORDER BY `Nome completo` DESC, Cargo;

##########################################################################################################################

-- SELECT
-- 	CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS `Nome completo`,
-- 	J.JOB_TITLE AS Cargo,
-- 	START_DATE AS 'Data de início do cargo',
-- 	D.DEPARTMENT_NAME AS Departamento
-- FROM
-- 	hr.job_history AS JH
-- JOIN
-- 	hr.employees AS E ON E.EMPLOYEE_ID = JH.EMPLOYEE_ID
-- JOIN
-- 	hr.jobs AS J ON J.JOB_ID = JH.JOB_ID
-- JOIN
-- 	hr.departments AS D ON D.DEPARTMENT_ID = JH.DEPARTMENT_ID
-- ORDER BY `Nome completo` DESC , Cargo;
