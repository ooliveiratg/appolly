import styled from "styled-components";
import Background from '../../../assets/Background/Background.png'
import { DefaultTheme } from "../../../themes/default";

export const FeaturesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height:100%;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: ${DefaultTheme.colors.white};
`

export const TitleFeature = styled.h2`
    font-size: 31.25px;
    font-weight: 700;
    margin-top: 120px;
    text-align: center;
    margin-bottom: 18px;
    
    @media (max-width: 556px) {
        font-size: 25px;

    }
`

export const FeatureParagraph = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    width: 601px;
    margin-bottom: 60px;

    @media (max-width: 556px) {
        margin-bottom: 32px;
        width: 300px;
        font-size: 16px;
    }
`

export const GroupChat = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const  TitleOfElements = styled.h3`
    font-size: 25px;
    margin: 22px 0 18px 0;
    font-weight: 600;
`
export const SubTitleOfElements = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 297px;
    margin-bottom: 60px;
`


export const imgCellphone = styled.img`
    width: 375px;
    height:  812px;
    box-shadow: 40px 40px 100px rgba(24, 48, 63, 0.5);

    @media (max-width: 800px) {
        width: 414px;
        height: 768px;
        
    }
`