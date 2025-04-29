import styled from "styled-components";
import { DefaultTheme } from "../../themes/default";


export const ContainerLinksSideBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 100;
`
export const PositionButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    padding: 25px 25px;
`


export const GroupLinksSideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0px 89px 39px 40px;
    gap: 25px;
`

export const LinksNavSidebar = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${DefaultTheme.colors["black-500"]};
    display: block;
    width: 100%;
    cursor: pointer;
    transition: color 0.5s, text-decoration 0.5s;

    &:hover{
        color: ${DefaultTheme.colors["Royal blue-800"]};
        text-decoration: underline ${DefaultTheme.colors["Royal blue-800"]} 2px;
    }
`

