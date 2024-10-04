import { FiCamera } from "react-icons/fi";
import { Container } from "./styles";

export function InputIcon({ title, placeholder }) {
  return (
    <Container type="input">
      <label htmlFor="inp">
        {title}
        <FiCamera />
      </label>

      <div>
        <input id="inp" type="file" placeholder={placeholder} />
      </div>
    </Container>
  );
}
