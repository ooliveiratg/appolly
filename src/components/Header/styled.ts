import styled from "styled-components";
import { DefaultTheme } from "../../themes/default";
import BackgroundHomePage from '../../assets/Background/Background.png'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    
    background-image: url(${BackgroundHomePage});

    @media (max-width: 1280px) {
        
    }
    
`
export const SectionInformations = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 35px 135px;
    
    @media (max-width:1280px) {
        margin: 25px 40px;
    }

    @media (max-width:390px) {
        display: none;
    }
`


export const GroupInformations = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    
`

export const Informations= styled.p`
    font-size: 16px;
    font-weight: 400; 
    color: ${DefaultTheme.colors.white};
    cursor: pointer;
`

export const GroupSocialMedia = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const GroupSection = styled.section`
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;
   z-index: 10;
   margin-top: 15px;
 
`

export const NavContent = styled.div`
    display: flex;
    padding: 5px 5px 5px 52px ;
    margin: 59px 135px;
    background: ${DefaultTheme.colors.white};
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;

    @media (max-width:1280px) {
        margin: 69px 40px;  
        padding:  5px 5px 5px 18px;  
    }

    @media (max-width:375px) {
        margin: 30px 16px;
        padding: 3px 3px 3px 9px;
    }
`

export const LinksNav = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${DefaultTheme.colors["black-500"]};

    &:hover{
        color: ${DefaultTheme.colors["Royal blue-800"]};
        text-decoration: underline ${DefaultTheme.colors["Royal blue-800"]} 2px;
    }
`
export const ImageContainer = styled.div`
    position: absolute;
    z-index: 11;
    background: ${DefaultTheme.colors.white};
    border-radius: 5px;
    left: 50%; 
    transform: translateX(-50%); 

    img{
        padding: 31px 17px;

        @media (max-width:390px) {
        width: 84px;

        padding: 24px 10px;
        }
       
    }
`

export const LogoSpace = styled.div`
    width: 200px;

    @media (max-width:390px) {
        width: 100px;
    }

`

