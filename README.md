# Requisitos Funcionais

[x] Deve ser possível cadastrar um pet
[ ] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
[ ] Deve ser possível filtrar pets por suas características
[ ] Deve ser possível visualizar detalhes de um pet para adoção
[x] Deve ser possível se cadastrar como uma ORG
[x] Deve ser possível realizar login como uma ORG

# Regras de Negócio

[ ] Para listar os pets, obrigatoriamente precisamos informar a cidade
[ ] Uma ORG precisa ter um endereço e um número de WhatsApp
[x] Um pet deve estar ligado a uma ORG
[ ] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp
[x] Todos os filtros, além da cidade, são opcionais
[x] Para uma ORG acessar a aplicação como admin, ela precisa estar logada

# Requisitos Não Funcionais

[x] A senha do usuário precisa estar criptografada
[x] Os dados da aplicação vão ser persistidos em um banco PostgreSQL
[ ] Todas as listas de dados serão paginadas com até 20 itens por página
[x] Uma ORG será identificada por um token JWT