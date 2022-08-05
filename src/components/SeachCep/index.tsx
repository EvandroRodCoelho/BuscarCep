import { useState } from "react"
import { Container } from "../../style/styles"
import * as C from "./styles"
import axios from "axios"
import { Card } from "../card"



export const SearchCep = () => {

    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [Bairro, setBairro] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [untypedValue, setUntypedValue] = useState<undefined | boolean>(undefined)

    const handleInput = (e: string) => {
        if (e === "") setUntypedValue(undefined)
        setCep(e)
    }
    const handleCep = async (cep: string) => {
        if (!cep) {
            setUntypedValue(false)
            return alert('Digite o cep')
        }
        if (cep) {
            await axios
                .get(`https://viacep.com.br/ws/${cep}/json/`)
                .then((response) => response.data)
                .then((e) => {
                    setLogradouro(e.logradouro)
                    setBairro(e.bairro)
                    setLocalidade(e.localidade)
                    setUntypedValue(true)
                })
                .catch(() => setUntypedValue(false))
        }
    }

    return (
        <Container>
            {untypedValue == false ? <C.TextError>Digite o cep corretamente</C.TextError> : ""}
            <C.Container >
                <C.Input onChange={(e) => handleInput(e.target.value)}
                    className={untypedValue ? "cep " : "setUntypedValue"}
                />
                <C.Button
                    onClick={() => handleCep(cep)}
                >
                    Pesquisar
                </C.Button>
            </C.Container>
            {untypedValue && <Card
                logradouro={logradouro}
                Bairro={Bairro}
                localidade={localidade} />
            }
        </Container>
    )
} 