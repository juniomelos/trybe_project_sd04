USE hr;
DELIMITER $$

DROP PROCEDURE exibir_historico_completo_por_funcionario;

CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN email VARCHAR(50))

BEGIN

SELECT CONCAT(emp.FIRST_NAME, ' ', emp.LAST_NAME) AS `Nome completo`,
dep.DEPARTMENT_NAME AS Departamento,
jobs.JOB_TITLE AS Cargo
FROM hr.employees AS emp

JOIN hr.job_history AS jh
ON jh.EMPLOYEE_ID = emp.EMPLOYEE_ID
JOIN hr.departments AS dep
ON dep.DEPARTMENT_ID = jh.DEPARTMENT_ID
JOIN hr.jobs AS jobs
ON jobs.JOB_ID = jh.JOB_ID

WHERE emp.EMAIL = email
ORDER BY Departamento, Cargo;

END $$

DELIMITER ;

CALL exibir_historico_completo_por_funcionario('NKOCHHAR');
