import { Container } from "./styles";

export function InputForm({ title, id, ...rest}){

    return(
        <Container>
            <label htmlFor={id}>{title}</label>
            <input id={id} {...rest} />
        </Container>
    )
}
