import { Container } from "./styles";

export function LinkButton({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
