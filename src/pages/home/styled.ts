import styled from "styled-components";
import { DefaultTheme } from "../../themes/default";

export const SectionHero = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 175px;
    width: 100%;
    height: 100%;

    @media (max-width:1280px) {
        gap: 55px;    
    }

`
export const CardHeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 570px;
    height: 535px;
    border: 18px solid ${DefaultTheme.colors["Royal blue-800"]};

    @media (max-width:1280px) {
        width: 391px;
        height: 381px;
        
    }

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

    @media (max-width:1280px) {
        width: 358px;
        height: 318px;
        right: 35px;
        padding: 14px 8px 0px 18px;
    }

`

export const HeroTitle = styled.h1`
    color:${DefaultTheme.colors["Royal blue"]} ;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 18px;

    @media (max-width:1280px) {
        font-size: 31px;
        margin-bottom: 6px;
        line-height: 47px;
    }
`

export const HeroParagraph = styled.p`
    font-size: 16px;
    color: ${DefaultTheme.colors["gray-500"]};
    font-weight: 400;
    margin-bottom: 52px;
    line-height: 24px;
    
    @media (max-width:1280px) {
        margin-bottom: 23px;
        
    }
`

export const HeroSubTitlte = styled.h3`
    font-size: 25px;
    font-weight: 600;
    color: ${DefaultTheme.colors["black-500"]};
    margin-bottom: 5px;

    @media (max-width:1280px) {
        font-size: 20px;
        line-height: 30px;
    }
`
export const GroupButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    img{
        @media (max-width:1280px) {
        width: 149px;
        height: 47px;
    }
}
`
export const ImageHero = styled.div`

    img{
        margin-bottom: 83px;

        @media (max-width:1280px) {
        width: 378px;
        height: 423px;
    }
    }
`
 