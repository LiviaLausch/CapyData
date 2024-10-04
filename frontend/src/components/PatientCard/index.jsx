import { useParams } from "react-router-dom";
import capiImg from "../../assets/capivaraImg.jpg";
import { Container } from "./styles";

export function PatientCard({ name, habitat, id }) {
  const { id: biologistId } = useParams();

  return (
    <Container to={`/biologist/${biologistId}/patients/${id}`}>
      <button>
        <div>
          <h2>+</h2>
          <img src={capiImg} alt="foto de perfil" />
          <p>{name}</p>
          <span>{habitat}</span>
        </div>
      </button>
    </Container>
  );
}
