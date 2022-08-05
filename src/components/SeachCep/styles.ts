import styled from "styled-components";

export const Container = styled.div`   
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    input, button{
        font-size: 0.9rem;    
        padding: 10px 5px;
        background-color: #fff;
    }
    @media (min-width: 500px) {
        background-color: white;
        input, button{
            font-size: 1.5rem;
            padding: 20px 15px;
            background-color: transparent;
            margin: 0;
        }}

    
`
export const Input = styled.input`     
    flex: 1;
    border-radius: 20px;
    border: none;
    outline: 0;
    background-color: white;
    
`

export const Button = styled.button`   
    cursor: pointer;
    background-color: transparent;
    font-weight: 700;
    margin:10px 0;
    transition: opacity linear 0.3s;
    &:hover{
        opacity: 0.7;
    }
`

export const TextError = styled.p`  
    color: #000;
    font-weight: 700;
    margin-bottom: 5px;
`