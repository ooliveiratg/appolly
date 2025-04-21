
import { GroupInformations, GroupSection, GroupSocialMedia, HeaderContainer, ImageContainer, Informations, LinksNav, LogoSpace, NavContent, SectionInformations } from "./styled";
import logo from '../../assets/icons/Logo.png'
import { EnvelopeSimple, InstagramLogo, Phone, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { LinksBeforeImage, LinksAfterImage } from "./data";
import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { ButtonStyle } from "../Button/styled";
import { DefaultTheme } from "../../themes/default";


export function Header(){
    return(
        <HeaderContainer>
            <SectionInformations>
                <GroupInformations>
                        <EnvelopeSimple size={24} weight={"regular"} color={`${DefaultTheme.colors.white}`} />
                        <Informations>Info@youremail.com</Informations>

                        <Phone fontSize={24} weight={"regular"} color={`${DefaultTheme.colors.white}`}/>
                        <Informations>(480) 555-0103</Informations>
                </GroupInformations>
                <GroupSocialMedia>
                    <FacebookLogo size={24} weight="bold" color={`${DefaultTheme.colors.white}`}/>
                    <InstagramLogo size={24} weight={"bold"}color={`${DefaultTheme.colors.white}`}/>
                    <TwitterLogo size={24} weight={"bold"} color={`${DefaultTheme.colors.white}`}/>
                    <YoutubeLogo size={24} weight={"bold"} color={`${DefaultTheme.colors.white}`}/>
                </GroupSocialMedia>
            </SectionInformations>
            <GroupSection>
                <NavContent>
                {LinksBeforeImage.map((LinksBeforeImage,index) => (
                    <LinksNav key={index}>
                        {LinksBeforeImage}
                    </LinksNav>
                ))}
                <LogoSpace/>
                <ImageContainer>
                    <img src={logo} alt="logo com uma imagem de montanha do lado esquerdo e o nome da marca do lado APPOLY" />
                </ImageContainer>
                
                {LinksAfterImage.map((LinksAfterImage,index) => (
                    <LinksNav key={index}>
                        {LinksAfterImage}
                    </LinksNav>
                ))}
               
                    <ButtonStyle 
                        bgColor={`${DefaultTheme.colors["Royal blue"]}`}
                        fontSize="20px"
                        borderRadius="5px"
                        color={`${DefaultTheme.colors.white}`}
                        padding="12px 15px 8px 16px"
                        
                         >
                            DOWNLOAD
                    </ButtonStyle>
                </NavContent>
            </GroupSection>
        </HeaderContainer>
    )
}