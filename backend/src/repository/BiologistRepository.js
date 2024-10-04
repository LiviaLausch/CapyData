const knex = require("../database/connection");

class BiologistRepository {
    async findByEmail(email){
        return knex("biologists").where({ email }).first();
    }

    async create({name, email, password}) {

        const [id] = await knex("biologists").insert({
            name,
            email,
            password
          });

        return { id };
    }
}

module.exports = BiologistRepository;