SELECT
UCASE(CONCAT(EM.FIRST_NAME, ' ', EM.LAST_NAME)) AS `Nome completo`,
JH.START_DATE AS `Data de início`,
EM.SALARY AS Salário
FROM hr.job_history AS JH, hr.employees AS EM
WHERE (EM.EMPLOYEE_ID = JH.EMPLOYEE_ID)
AND MONTH(JH.START_DATE) IN (01, 02, 03)
ORDER BY `Nome completo`, `Data de início`;
