import { LinkButton } from "../../components/LinkButton";
import { Container } from "./styles";
import { Link, useParams } from "react-router-dom";
import perfilImg from "../../assets/perfilImg.jpg";
import useSWR from "swr";
import { fetcher } from "../../api/api";
import { ArrowBack } from "../../components/ArrowBack";

export function Home() {
  const { id } = useParams();
  const { data, isLoading } = useSWR(`/biologists/${id}`, fetcher);
  return (
    <Container>
      {isLoading ? (
        <p>carregando...</p>
      ) : (
        <>
          <div className="perfil">
            <div className="arrow">
              <ArrowBack to="/" />
            </div>
            <img src={perfilImg} alt="Foto perfil" />
            <h1>{data.name}</h1>
          </div>

          <div className="main">
            <h2>Menu</h2>
            <LinkButton to={`/biologist/${id}/edit`} title="Editar perfil" />
            <LinkButton
              to={`/biologist/${id}/patients`}
              title="Todos os Pacientes"
            />
            <LinkButton
              to={`/biologist/${id}/new`}
              title="Adicionar paciente"
            />
          </div>
        </>
      )}
    </Container>
  );
}
