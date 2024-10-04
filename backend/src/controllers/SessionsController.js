const knex = require("../database/connection");
const BiologistRepository = require("../repository/BiologistRepository");
const { compare } = require("bcryptjs");

const biologistRepository = new BiologistRepository();

class SessionsControlller {
    async create(request, response){

        const { email, password } = request.body;

        const biologist = await biologistRepository.findByEmail(email);

        if(!biologist){
            return response.status(404).json({ error: "E-mail e/ou senha incorretos" });
        }

        const passwordMatched = await compare(password, biologist.password);

        if(!passwordMatched){
            return response.status(404).json({ error: "E-mail e/ou senha incorretos" });
        }
        delete biologist.password;
        return response.json(biologist);
    }
}

module.exports = SessionsControlller;