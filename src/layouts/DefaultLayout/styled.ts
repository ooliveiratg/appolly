import styled from "styled-components";
import BackgroundHomePage from '../../assets/Background/Background.png'

export const LayoutContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
        background-image: url(${BackgroundHomePage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
 
`