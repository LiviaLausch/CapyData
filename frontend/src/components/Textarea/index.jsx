import { Container } from "./styles";
import { useFormContext } from "react-hook-form";

export function Textarea({ id, name, ...rest }) {
  const { register } = useFormContext();

  return <Container id={id} {...rest} {...register(name)} />;
}
