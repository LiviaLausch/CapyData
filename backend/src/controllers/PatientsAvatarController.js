const knex = require("../database/connection");
const DiskStorage = require("../providers/DiskStorage");

class PatientsAvatarController {
    async update(request, response){
        const { id } = request.params;
        const avatarFilename = request.file.filename;

        const diskStorage = new DiskStorage();

        const patient = await knex("patients")
            .where({id}).first();

            if(!patient){
                return response.status(500).json({ error: "Somente usuários autenticados podem mudar o avatar"});
            }

            if(patient.avatar){
                await diskStorage.deleteFile(patient.avatar);
            }

            const filename = await diskStorage.saveFile(avatarFilename);
            patient.avatar = filename;

            await knex("patients").update(patient).where(id);

            return response.json(patient);
    }
}

module.exports = PatientsAvatarController;