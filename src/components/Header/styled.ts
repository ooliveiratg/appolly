import styled from "styled-components";
import { DefaultTheme } from "../../themes/default";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 67px;
    
`
export const SectionInformations = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 35px 135px;
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
    margin-right: 30px;
    color: ${DefaultTheme.colors.white};
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
    padding: 8px 16px;
    margin: 59px 135px;
    background: ${DefaultTheme.colors.white};
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;

`

export const LinksNav = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${DefaultTheme.colors["black-500"]};
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
       
    }
`

export const LogoSpace = styled.div`
    width: 200px;
`

