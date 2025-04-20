
import { GroupInformations, GroupSection, GroupSocialMedia, HeaderContainer, ImageContainer, Informations, LinksNav, LogoSpace, NavContent, SectionInformations } from "./styled";
import logo from '../../assets/icons/Logo.png'
import { EnvelopeSimple, InstagramLogo, Phone, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { LinksBeforeImage, LinksAfterImage } from "./data";
import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";

export function Header(){
    return(
        <HeaderContainer>
            <SectionInformations>
                <GroupInformations>
                        <EnvelopeSimple size={24} weight={"regular"} color="white" />
                        <Informations>Info@youremail.com</Informations>

                        <Phone fontSize={24} weight={"regular"} color="white"/>
                        <Informations>(480) 555-0103</Informations>
                </GroupInformations>
                <GroupSocialMedia>
                    <FacebookLogo size={24} weight="bold" color="white"/>
                    <InstagramLogo size={24} weight={"bold"}color="white"/>
                    <TwitterLogo size={24} weight={"bold"} color="white"/>
                    <YoutubeLogo size={24} weight={"bold"} color="white"/>
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

                </NavContent>
            </GroupSection>
        </HeaderContainer>
    )
}