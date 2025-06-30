import styled from "styled-components";
import { DefaultTheme } from "../../../themes/default";

export const SectionAbout = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height:100%;
    background-color: white;
`

export const TitleAbout = styled.h2`
    font-size: 31px;
    font-weight: 700;
    margin-top: 120px;
    color: ${DefaultTheme.colors["black-500"]};
`

export const AboutParagraph = styled.p`
    font-size: 16px;
    margin-top: 18px;
    text-align: center;
    color: ${DefaultTheme.colors["gray-500"]};
    font-weight: 400;
    width: 600px;
    height: 70px;
    line-height: 24px;
    margin-bottom: 80px;

    @media (max-width: 884px) {
        width: 450px;
        height: 70px;
        
    }
`

export const ContainerGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 168px;

    @media (max-width: 884px) {
        gap: 60px;
    }

    @media (max-width: 566px) {
        flex-direction: column;
        
    }
`
export const GroupImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImageCellphone = styled.img`
    width: 386;
    height: 526px;

    @media(max-width: 884px) {
        width: 238px;
        height: 359px;
        
    }

`

export const BoxShadowImg = styled.div`
    width: 212px;
    height: 71px;
    box-shadow: 0 1px 10px rgb(0,0,0,10%);
    border-radius: 50%;
`

export const  GroupCardsInformations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 138px;

    @media (max-width: 884px) {
        gap:20px ;
    }
`