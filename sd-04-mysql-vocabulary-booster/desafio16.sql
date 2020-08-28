USE hr;
DELIMITER $$

DROP FUNCTION buscar_quantidade_de_empregos_por_funcionario;

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(100))
RETURNS INT READS SQL DATA

BEGIN

DECLARE amount_jobs_history INT;
SELECT COUNT(*)
FROM hr.employees AS emp
JOIN hr.job_history AS jh
ON jh.EMPLOYEE_ID = emp.EMPLOYEE_ID
WHERE emp.EMAIL = email
INTO amount_jobs_history;
RETURN amount_jobs_history;

END $$

DELIMITER ;

SELECT buscar_quantidade_de_empregos_por_funcionario("NKOCHHAR");

-- SELECT COUNT(*) FROM hr.job_history
-- GROUP BY EMPLOYEE_ID
-- HAVING EMPLOYEE_ID IN (
-- SELECT EMPLOYEE_ID from hr.employees
-- WHERE hr.employees.email =  email)
