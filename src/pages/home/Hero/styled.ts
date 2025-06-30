import styled from "styled-components";
import { DefaultTheme } from "../../../themes/default";
import BackgroundHomePage from '../../../assets/Background/Background.png'
export const SectionHero = styled.section`
    display: flex;
    padding-top: 216px;
    justify-content:center;
    align-items: center;
    gap: 124px;
    width: 100vw;
    min-height: 100vh;
    background-image: url(${BackgroundHomePage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
   
    @media (max-width:980px) {
        gap:55px;
        justify-content:space-between ;
        padding: 216px 40px;
        align-items: normal;
    }

    @media (max-width:556px) {
        flex-direction: column;
        align-items: center;
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

    @media (max-width:980px) {
        width: 391px;
        height: 381px;
    }

    @media (max-width:556px) {
       width: 323px;
       height: 358px;
       
       border: 10px solid ${DefaultTheme.colors["Royal blue-800"]};
       
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

    @media (max-width:980px) {
        width: 358px;
        height: 318px;
        right: 35px;
        padding: 14px 8px 0px 18px;
    }

    @media (max-width:556px) {
       width: 323px;
       height: 318px;
       margin-top: 20px;
    }

`

export const HeroTitle = styled.h1`
    color:${DefaultTheme.colors["Royal blue"]} ;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 18px;

    @media (max-width:980px) {
        font-size: 31px;
        margin-bottom: 6px;
        line-height: 47px;
    }

    @media (max-width:556px) {
        margin-bottom: 18px;
       font-size: 25px;
       line-height: 37px
    }
`

export const HeroParagraph = styled.p`
    font-size: 16px;
    color: ${DefaultTheme.colors["gray-500"]};
    font-weight: 400;
    margin-bottom: 52px;
    
    @media (max-width:980px) {
        margin-bottom: 23px;
    }

    @media (max-width:556px) {
        margin-bottom: 30px;
    }
`

export const HeroSubTitlte = styled.h3`
    font-size: 25px;
    font-weight: 600;
    color: ${DefaultTheme.colors["black-500"]};
    margin-bottom: 5px;

    @media (max-width:980px) {
        font-size: 20px;
        line-height: 30px;
    }

    @media (max-width: 556px) {
        margin-bottom: 18px ;
        
    }
`
export const GroupButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    img{
        @media (max-width:980px) {
        width: 149px;
        height: 47px;
    }

    @media (max-width:556px) {
       width: 108px;
       height: 34px;
    }
}
`
export const ImageHero = styled.div`
    img{
        margin-bottom: 83px;

        @media (max-width:980px) {
        width: 378px;
        height: 423px;
        margin-bottom: 229px;
    }

    @media (max-width: 556px) {
        position: relative;
        left: 20px;
        
    }
    }
`

