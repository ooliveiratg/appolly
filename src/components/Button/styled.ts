import styled from "styled-components";

interface ButtonProps {
    width: string;
    height: string;
    borderRadius: string;
    fontSize: string;
    bgColor: string;
    color: string ;
}

export const ButtonStyle = styled.button<ButtonProps>`
    background-color: ${props => props.bgColor};
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    border-radius: ${props => props.borderRadius};
    color: ${props => props.color};
    border: none;

 `