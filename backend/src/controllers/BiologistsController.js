const knex = require("../database/connection");
const BiologistRepository = require("../repository/BiologistRepository");
const { hash, compare } = require("bcryptjs");

const biologistRepository = new BiologistRepository();

class BiologistsController {

  async create(request, response) {
    const { name, email, password } = request.body;
    
    if (!name || !email || !password) {
      return response.status(400).json({ error: "Nome, email e senha são obrigatórios." });
    }
    const checkUsersExist = await biologistRepository.findByEmail(email);
    
    if(checkUsersExist) {   
      return response.status(400).json({ error: "Email já cadastrado" });
    }

    const hashedPassword = await hash(password, 8);

    try {
      const { id } = await biologistRepository.create({name, email, password: hashedPassword})

      return response.status(201).json({ id, message: "Biólogo criado com sucesso!" });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao criar biólogo." });
    }
  }
  
  async update(request, response){    
    const { id } = request.params;
    const { name, email, oldPassword, password } = request.body;

    const biologist = await knex("biologists").where({ id }).first();
    
    if (!biologist) {
      return response.status(404).json({ error: "Usuário não encontrado!" });
    }

    const validPassword = await compare(oldPassword, biologist.password)

    if(!validPassword){
      return response.status(403).json({ error: "Senha atual incorreta." });
    }

    await knex("biologists").where({ id }).update({
      name,
      email,
      password: await hash(password, 8),
    });

    return response.status(200).json({message: "Cadastro atualizado com sucesso!"});
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ error: "ID é obrigatório" });
    }

    try {
      const biologist = await knex("biologists").where({ id }).first();

      if (!biologist) {
        return response.status(404).json({ error: "Biólogo não encontrado." });
      }

      await knex("biologists").where({ id }).del();

      return response.status(200).json({ message: "Biólogo deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erroao deletar biologo." });
    }
  }

  // Exibe um biologo especifico 
  async show(request, response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ error: "ID é obrigatório" });
    }

    try {
      const biologist = await knex("biologists").where({ id }).first();

      if (!biologist) {
        return response.status(404).json({ error: "Biólogo não encontrado" });
      }

      delete biologist.password;
      
      return response.status(200).json(biologist);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao buscar biólogo" });
    }
  }
}

module.exports = BiologistsController;
