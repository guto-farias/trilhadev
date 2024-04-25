const customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
    { id: 2, name: "Google", site: "http://google.com" },
    { id: 3, name: "UOL", site: "http://uol.com.br" },
];

class CustomerController {
    // listagem Customers
    index(req, res) {
        return res.json(customers);
    }

    // recupera um Customer
    show(req, res) {
        const id = parseInt(req.params.id, 10);
        const customer = customers.find((item) => item.id === id);
        const status = customer ? 200 : 404;

        return res.status(status).json(customer);
    }

    // cria Customer
    create(req, res) {
        const { name, site } = req.body;
        const id = customers[customers.length - 1].id + 1;

        const newCustomer = { id, name, site };
        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    }

    // atualiza Customer
    update(req, res) {
        const id = parseInt(req.params.id, 10);
        const { name, site } = req.body;
        const index = customers.findIndex((item) => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers[index] = { id: parseInt(id, 10), name, site };
        }

        console.log(customers);

        return res.status(status).json(customers[index]); // return no json pra dar sensação de resposta
    }

    // deleta Customer
    destroy(req, res) {
        const id = parseInt(req.params.id, 10);
        const index = customers.findIndex((item) => item.id === id); // findIndex testa cada elemento do customers e retorna quando a condição for satisfeita

        const status = index >= 0 ? 200 : 404; // se o index for >= 0 status ok

        if (index >= 0) {
            customers.splice(index, 1); // deleta um item do customer
        }

        return res.status(status).json(); // return no json vazio pos n faz sentido mostrar o deletado
    }
}

export default new CustomerController();
