--ATIVIDADE: Emitir relatório de gastos por categoria (valores incoerentes por ter colocados valores aleatórios na tabela).
--	

--RESPOSTA

SELECT t2.nome, SUM(CAST(REPLACE(REPLACE(t1.valor, 'R$ ', ''), ',', '.') AS DECIMAL)) AS total
FROM lancamento AS t1
JOIN categoria AS t2 ON t1.id_categoria = t2.id
GROUP BY t2.nome
