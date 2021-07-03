Foram utilizadas bibliotecas "axios", "express" para poder desenvolver o projeto, o projeto comten mais que 
uma rota para ter funcionamento, sendo 2 rotas para API, 1 rota para os JSON, 1 rota para tratar erros e 1 rota 
para executar o servidor.

Todas as rotas foram organizadas dentro de pastas para melhor separação, tendo o Index, a pasta "SRC" contendo 
a pasta "API" que possui mais 3 pastas dentro delas sendo "DATA", "MODELS" E "ROUTES", a pasta "DATA" contem um INDEX
a pastas "MODELS" contem 2 framework e nas "ROUTES" se encontras as duas rotas existente na API, as rotas da API 
contam com o devido tratamento de erro.

Para realizar a busca ou comparacao de dados da segunda API foi utilizado a biblioteca "axios" para retornar 
dados de uma API paralela a que montamos, onde os dados podem ser comparados ou ate mesmo incrementados na 
api;

A API foi ospedada no Heroku onde a pessoa tiver acesso ao link da API pode estar utulizando a mesma ou
ate mesmo atravez do prorpio insominia podem serem relizados os testes na API.