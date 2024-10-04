import { Container } from "./styles";
import capiImg from "../../assets/capivaraImg.jpg";
import { FiEdit3, FiX } from "react-icons/fi";
import { ArrowBack } from "../../components/ArrowBack";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api, fetcher } from "../../api/api";
import useSWR from "swr";

export function Details() {
  const { patientId, id } = useParams();
  const { data, isLoading } = useSWR(
    `/patients/${patientId}?biologist_id=${id}`,
    fetcher
  );
  const navigate = useNavigate();

  async function handleDelete() {
    const confirmDelete = window.confirm("Você realmente deseja deletar este paciente?");
    if (confirmDelete) {
      try {
        await api.delete(`/patients/${patientId}`);
        alert("Paciente deletado com sucesso!");

        navigate(`/biologist/${id}/patients`);
      } catch (error) {
        console.error("Erro ao deletar o paciente:", error);
        alert("Erro ao deletar o paciente. Tente novamente mais tarde.");
      }
    }
  }

  return (
    <Container>
      <ArrowBack to={`/biologist/${id}/patients`} />
      <h1>Informações do paciente</h1>

      <div id="edit">
        <Link to={`/biologist/${id}/patients/${patientId}/edit`}>
          <FiEdit3 />
        </Link>
        <FiX onClick={handleDelete} style={{ cursor: "pointer" }}/>
      </div>
      <div id="perfil">
        <img src={capiImg} alt="foto do perfil" />

        {isLoading ? (
          <p>carregando...</p>
        ) : (
          <section>
            <span> Nome: {data.name}</span>
            <p>Idade: {data.age}</p>
            <p>Peso: {data.weight}</p>
            <p>Status de saúde: {data.status}</p>
            <p>Habitat: {data.habitat}</p>
            <p>Comportamento: {data.behavior}</p>
            <p>Dieta: {data.diet}</p>
            <p>Observações: {data.observation}</p>
          </section>
        )}
      </div>
    </Container>
  );
}
