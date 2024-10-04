import { Container } from "./styles";
import { useFormContext } from "react-hook-form";

export function Select() {
  const { register } = useFormContext();

  return (
    <Container>
      <label htmlFor="status">Status de Saúde</label>
      <select name="Status" id="status" {...register("Status")}>
        <option value="Saudável">Saudável</option>
        <option value="Necessita de Cuidados">Necessita de cuidados</option>
        <option value="Doente">Doente</option>
      </select>
    </Container>
  );
}
