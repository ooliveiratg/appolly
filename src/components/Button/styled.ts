import styled from "styled-components";

interface ButtonProps {
    width: string;
    height: string;
    borderRadius: string;
    fontSize: string;
    bgColor: string;
    color: string ;
    mobileWidth?: string;
    mobileHeight?: string;
    mobileFont?: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
    background-color: ${props => props.bgColor};
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    border-radius: ${props => props.borderRadius};
    color: ${props => props.color};
    border: none;

    @media (max-width:556px) {
        width: ${props => props.mobileWidth};
        height: ${props => props.mobileHeight};
        font-size: ${props => props.mobileFont};
        
    }

 `