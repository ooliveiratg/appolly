import styled from "styled-components";
import { DefaultTheme } from "../../themes/default";

interface CardsProps{
    width:string,
    height:string,
    padding:string
}
export const ContainerCardInformations = styled.div<CardsProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    box-shadow: 0 1px 10px rgb(0,0,0,10%);
    display: flex;
    justify-content: center;
    align-items: start;
    border-radius: 10px;
    padding: ${props => props.padding};
    gap: 6px;
    margin-right: 20px;

     @media (max-width: 900px) {
        gap: 19px;
        margin-right: 40px;
    }


    @media (max-width: 556px) {
        gap: 19px;
        margin: 0px 16px;
    }

`

export const GroupTextsCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 12px;
`

export const TitleCard = styled.h2`
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
`

export const DescriptionCard = styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${DefaultTheme.colors["gray-500"]};
`