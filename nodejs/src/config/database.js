module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "123",
    database: "teste-nodejs",
    define: {
        timestamps: true, // cria duas colunas: createdAt, updatedAt
        underscored: true, // troca nomeclatura: customersGroup => customers_group
        underscoredAll: true,
    },
};
