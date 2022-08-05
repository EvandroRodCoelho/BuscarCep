import styled, { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle` 
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        width: 100%;
        font-family: 'Roboto', sans-serif;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #4D5259;
    }
`
export const Container = styled.div`  
        width: 250px;
        @media (min-width: 700px) {
            width: 700px;
        }
        @media (min-width: 1000px) {
            width: 900px;
        }
`