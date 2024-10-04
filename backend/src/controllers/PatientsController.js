const knex = require("../database/connection");

class PatientsController {
  async create(request, response) {
    const { name, age, weight, status, habitat, behavior, diet, observation, biologist_id } = request.body;

    if (!name || !age || !weight) {
      return response.status(400).json({ error: "Nome, idade e peso são obrigatórios." });
    }

    try {
      const [id] = await knex("patients").insert({
        name,
        age,
        weight,
        status,
        habitat,
        behavior,
        diet,
        observation,
        biologist_id
      });

      return response.status(201).json({ id, message: "Paciente criado com sucesso" });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao criar paciente" });
    }
  }

  async update(request, response){
    console.log(request.body);
    
    const { id } = request.params;
    const { name, age, weight, status, habitat, behavior, diet, observation } = request.body;

    const patient = await knex("patients").where({ id }).first();

    if (!patient) {
      return response.status(404).json({ error: "Paciente não encontrado!" });
    }

    await knex("patients").where({ id }).update({
      name,
      age,
      weight,
      status,
      habitat,
      behavior,
      diet,
      observation
    });

    return response.status(200).json({ message: "Paciente atualizado com sucesso!" });
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ error: "ID é obrigatório" });
    }

    try {
      const patient = await knex("patients").where({ id }).first();

      if (!patient) {
        return response.status(404).json({ error: "Patiente não encontrado" });
      }

      await knex("patients").where({ id }).del();

      return response.status(200).json({ message: "Patiente deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao deletar paciente!" });
    }
  }

  async listAllByBiologistId(request, response) {
    const { biologist_id } = request.query;
    try {
      const patients = await knex("patients").where({ biologist_id });

      return response.status(200).json(patients);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao recuperar pacientes" });
    }
  }

  async listPatientByBiologist(request, response) {
    const { id } = request.params;
    const { biologist_id } = request.query;

    try {
      const patient = await knex("patients")
        .where({ biologist_id, id: id })
        .first();

      if (!patient) {
        return response.status(404).json({ error: "Paciente não encontrado" });
      }

      return response.status(200).json(patient);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao recuperar pacientes" });
    }
  }


}

module.exports = PatientsController;
