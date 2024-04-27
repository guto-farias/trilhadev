import Sequelize from "sequelize";

import config from "../config/database";

import Customer from "../app/models/Customer";
import Contact from "../app/models/Contact";
import User from "../app/models/User";

const models = [
    Customer,
    Contact,
    User
];

class Database {
    constructor() {
        this.connection = new Sequelize(config); // sequelize instanciado

        this.init();
    }

    init() {
        models.forEach(model => model.init(this.connection)); // puxo o método init do model passando o sequelize instanciado como parametro
    }
}

export default new Database();
