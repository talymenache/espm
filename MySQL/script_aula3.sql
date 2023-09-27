-- Loop Acumular "n" números
DELIMITER //
CREATE PROCEDURE acumula (limite INT)
BEGIN
DECLARE contador INT DEFAULT 0;
DECLARE soma INT DEFAULT 0;
loop_teste: LOOP
	SET contador = contador + 1;
	SET soma = soma + contador;
	IF contador >= limite THEN
		LEAVE loop_teste;
	END IF;
END LOOP loop_teste;
SELECT soma;
END//
DELIMITER ;
-- Testando
CALL acumula(5);


DROP procedure IF EXISTS DOWHILE;
DELIMITER //
CREATE PROCEDURE dowhile(limite int)
BEGIN
	DECLARE v1 INT DEFAULT 0;
	DECLARE soma INT DEFAULT 0;
	WHILE v1 <= limite DO
		SET soma = soma + v1;
		SET v1 = v1 + 1;
	END WHILE;
Select Soma;
END//
DELIMITER ;
CALL dowhile(5);