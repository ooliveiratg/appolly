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
`

export const ContainerGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 168px;
`

export const  GroupCardsInformations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`