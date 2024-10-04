import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function ArrowBack({...rest}){
    return(
        <Container {...rest}>
             <FiArrowLeft />
        </Container>
    )
}