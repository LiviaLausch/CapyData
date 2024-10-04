import { useFormContext } from "react-hook-form";
import { Container } from "./styles";

export function InputRadio({ title }) {
  const { register } = useFormContext();
  return (
    <Container>
      <h3>{title}</h3>
      <div className="input-wrapper">
        <label>
          <input type="radio" value="lago-sul" {...register("habitat")} />
          Lago Sul
        </label>
        <br />

        <label>
          <input type="radio" value="floresta-oeste" {...register("habitat")} />
          Floresta Oeste
        </label>
        <br />

        <label>
          <input type="radio" value="recinto-norte" {...register("habitat")} />
          Recinto Norte
        </label>
        <br />
      </div>
    </Container>
  );
}
