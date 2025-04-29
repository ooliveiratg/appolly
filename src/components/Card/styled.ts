import styled from "styled-components";
import { DefaultTheme } from "../../themes/default";

interface CardsProps{
    width:string,
    height:string
}
export const ContainerCardInformations = styled.div<CardsProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    box-shadow: 0 1px 10px rgb(0,0,0,10%);
    display: flex;
    justify-content: center;
    align-items: start;
    border-radius: 10px;
    padding: 30px 20px 21px 18px;
    gap: 6px;

    img{
        width: 24px;
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