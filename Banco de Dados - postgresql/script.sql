CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,
  nome_empresarial VARCHAR(255) NOT NULL,
  cnpj VARCHAR(18) NOT NULL,
  ie VARCHAR(15),
  email VARCHAR(255),
  website VARCHAR(255),
  telefone VARCHAR(255),
  cep VARCHAR(9),
  endereco VARCHAR(255),
  numero VARCHAR(255),
  complemento VARCHAR(255),
  bairro VARCHAR(255),
  cidade VARCHAR(255),
  estado CHAR(2),
  nota INTEGER,
  situacao VARCHAR(255) NOT NULL
);

CREATE TABLE contato (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  departamento VARCHAR(255),
  cpf VARCHAR(14) NOT NULL,
  email VARCHAR(255),
  telefone VARCHAR(15),
  situacao VARCHAR(255) NOT NULL,
  id_cliente INTEGER REFERENCES cliente(id)
);

CREATE TABLE fornecedor (
  id SERIAL PRIMARY KEY,
  nome_empresarial VARCHAR(255) NOT NULL,
  cnpj VARCHAR(18) NOT NULL,
  ie VARCHAR(15),
  email VARCHAR(255),
  website VARCHAR(255),
  telefone VARCHAR(255),
  cep VARCHAR(9),
  endereco VARCHAR(255),
  numero VARCHAR(255),
  complemento VARCHAR(255),
  bairro VARCHAR(255),
  cidade VARCHAR(255),
  estado CHAR(2),
  nota INTEGER,
  situacao VARCHAR(255) NOT NULL
);

CREATE TABLE conta (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  agencia VARCHAR(255) NOT NULL,
  conta_corrente VARCHAR(255) NOT NULL,
  data_inclusao TIMESTAMP NOT NULL,
  observacao TEXT,
  situacao VARCHAR(255) NOT NULL
);

CREATE TABLE categoria (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  debito BOOLEAN,
  credito BOOLEAN,
  situacao VARCHAR(255) NOT NULL,
  id_pai INTEGER REFERENCES categoria(id)
);

CREATE TABLE lancamento (
  id SERIAL PRIMARY KEY,
  parcela INTEGER NOT NULL,
  total_parcelas INTEGER NOT NULL,
  valor NUMERIC(10,2) NOT NULL,
  data_lancamento TIMESTAMP NOT NULL,
  data_vencimento TIMESTAMP NOT NULL,
  descricao TEXT,
  id_conta INTEGER REFERENCES conta(id),
  id_categoria INTEGER REFERENCES categoria(id),
  id_cliente INTEGER,
  id_fornecedor INTEGER
);