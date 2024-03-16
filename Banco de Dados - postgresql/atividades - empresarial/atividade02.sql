--ATIVIDADE: Emitir relatório de saldo por conta e saldo geral do banco.
--	

--RESPOSTA

--POR CONTA
SELECT  t2.nome, t1.id_conta, SUM(CAST(REPLACE(REPLACE(t1.valor, 'R$ ', ''), ',', '.') AS DECIMAL)) AS total_conta 
FROM lancamento AS t1
JOIN conta AS t2 ON t1.id_conta = t2.id
GROUP BY t2.nome, t1.id_conta

UNION ALL

--GERAL
SELECT NULL AS nome, NULL AS id_conta,
SUM(CAST(REPLACE(REPLACE(valor, 'R$ ', ''), ',', '.') AS DECIMAL)) AS saldo_geral
FROM lancamento;