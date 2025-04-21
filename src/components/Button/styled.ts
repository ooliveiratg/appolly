import styled from "styled-components";

interface ButtonProps {
    padding: string;
    borderRadius: string;
    fontSize: string;
    bgColor: string;
    color: string ;
}

export const ButtonStyle = styled.button<ButtonProps>`
    background-color: ${props => props.bgColor};
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    border-radius: ${props => props.borderRadius};
    color: ${props => props.color};
    border: none;

 `