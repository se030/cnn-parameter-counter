import styled from "@emotion/styled"
import { flex, FlexboxProps, layout, LayoutProps } from "styled-system"

export const CounterContainer = styled.div`
    margin: 50px auto auto auto;
    width: 80%;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    h1 {
        margin: 100px auto;
    }
`
export const FlexContainer = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 30px;
`

export const FlexColumn = styled.div<LayoutProps & FlexboxProps>`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 25px;
    ${layout}
    ${flex}
    .btn {
        display: block;
        font-family: 'Arial', Arial, Helvetica, sans-serif;
        font-size: medium;
        color: white;
        background-color: black;
        border: none;
        padding: 5px 10px;
        margin: 10px auto;
    }
    .btn:hover {
        transform: scale(1.05);
    }
`
export const LayerContainer = styled.div`
    position: relative;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    p {
        margin-bottom: 10px;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        column-gap: 20px;
    }
    div>span {
        width: 80px;
    }
    div>input {
        width: 120px;
        border: none;
        border-bottom: 1px solid black;
    }
`

export const DeleteButton = styled.button`
    position: absolute;
    top: 0px;
    right: 5px;
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    color: #707070;
    :hover {
        transform: scale(1.3);
    }
`