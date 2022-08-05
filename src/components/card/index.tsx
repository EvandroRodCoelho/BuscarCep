import { Container } from "../../style/styles";
import * as C from "./styles"
interface Prop {
    Bairro: string;
    logradouro: string
    localidade: string;
}

export const Card = ({ Bairro, logradouro, localidade }: Prop) => {

    return (
        <Container>
            <C.text>Bairro: {Bairro}</C.text>
            <C.text>Logradouro: {logradouro}</C.text>
            <C.text>Localidade: {localidade}</C.text>
        </Container>
    )
}