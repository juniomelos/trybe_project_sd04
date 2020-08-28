USE hr;
DELIMITER $$

DROP FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano;

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(mes INT, ano INT)
RETURNS INT READS SQL DATA

BEGIN

DECLARE amount_people INT;
SELECT COUNT(*)
FROM hr.employees
WHERE MONTH(HIRE_DATE) = mes
AND YEAR(HIRE_DATE) = ano
INTO amount_people;
RETURN amount_people;

END $$

DELIMITER ;

SELECT exibir_quantidade_pessoas_contratadas_por_mes_e_ano(6, 1987);
