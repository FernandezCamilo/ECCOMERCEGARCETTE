CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
  "Maria Flores",
  "maria@teste.com",
  8
);

select * from usuarios where idade = 8;