
-- Questão 1

INSERT INTO aluno(nome) values ("Lucas");
INSERT INTO responsavel(nome) values ("Pablo");
INSERT INTO parentesco(parentesco,idResponsavel,idAluno) values ("Pai",1,1);

INSERT INTO responsavel(nome) values ("Brenda");
INSERT INTO parentesco(parentesco,idResponsavel,idAluno) values ("Mae",2,1);

-- Questão 2

SELECT
  a.nome AS Aluno,
  CASE WHEN pai.parentesco = 'Pai' THEN pai_resp.nome ELSE '' END AS responsavel_p,
  pai.parentesco as parentesco_p,
  CASE WHEN mae.parentesco = 'Mae' THEN mae_resp.nome ELSE '' END AS responsavel_m,
  mae.parentesco as parentesco_m
FROM aluno AS a
LEFT JOIN parentesco AS pai ON a.id = pai.idAluno AND pai.parentesco = 'Pai'
LEFT JOIN parentesco AS mae ON a.id = mae.idAluno AND mae.parentesco = 'Mae'
LEFT JOIN responsavel AS pai_resp ON pai_resp.id = pai.idResponsavel
LEFT JOIN responsavel AS mae_resp ON mae_resp.id = mae.idResponsavel;

--Questão 3

select * from parentesco 
inner join aluno ON aluno.id = parentesco.idAluno
inner join responsavel ON responsavel.id = parentesco.idResponsavel