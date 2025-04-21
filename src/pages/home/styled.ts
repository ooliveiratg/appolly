import styled from "styled-components";
import BackgroundHomePage from '../../assets/Background/Background.png'
import { DefaultTheme } from "../../themes/default";

export const SectionHero = styled.section`
    /* background-image: url(${BackgroundHomePage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 175px;
    width: 100%;
    height: 100%;
`
export const CardHeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 570px;
    height: 535px;
    border: 18px solid ${DefaultTheme.colors["Royal blue-800"]};

`

export const CardHero = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
    position: relative;
    background: ${DefaultTheme.colors.white};
    width: 570px;
    height: 432px;
    right: 50px;
`

export const HeroTitle = styled.h1`
    color:${DefaultTheme.colors["Royal blue"]} ;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 18px;
`

export const HeroParagraph = styled.p`
    font-size: 16px;
    color: ${DefaultTheme.colors["gray-500"]};
    font-weight: 400;
    margin-bottom: 52px;
`

export const HeroSubTitlte = styled.h3`
    font-size: 25px;
    font-weight: 600;
    color: ${DefaultTheme.colors["black-500"]};
    margin-bottom: 5px;
    line-height: 37.5px;
`
export const GroupButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`
export const ImageHero = styled.div`

    img{
        margin-bottom: 83px;
    }
`
