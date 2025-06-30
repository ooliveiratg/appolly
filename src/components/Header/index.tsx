import {
  GroupInformations,
  GroupSection,
  GroupSocialMedia,
  HeaderContainer,
  ImageContainer,
  Informations,
  LinksNav,
  LogoSpace,
  NavContent,
  SectionInformations,
} from "./styled";
import logo from "../../assets/icons/Logo.png";
import {
  EnvelopeSimple,
  InstagramLogo,
  Phone,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { LinksBeforeImage, LinksAfterImage } from "./data";
import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { ButtonStyle } from "../Button/styled";
import { DefaultTheme } from "../../themes/default";
import { useEffect, useState } from "react";
import { Sidebar } from "../SideBar";

export function Header() {
  const [isNotbook, setIsNotbook] = useState(window.innerWidth <= 1280);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 556);

  useEffect(() => {
    const handleResize = () => {
      setIsNotbook(window.innerWidth <= 1280);
    };
    //“Toda vez que a tela for redimensionada, execute a função handleResize
    window.addEventListener("resize", handleResize);
    //Ela garante que, quando o componente for desmontado ou o efeito for reexecutado, o event listener seja removido
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 556);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  })
  

  return (
    <HeaderContainer>
      {!isMobile &&(
      <SectionInformations>
        <GroupInformations>
          <EnvelopeSimple
            size={24}
            weight={"regular"}
            color={`${DefaultTheme.colors.white}`}
          />
          <Informations>Info@youremail.com</Informations>

          <Phone
            fontSize={24}
            weight={"regular"}
            color={`${DefaultTheme.colors.white}`}
          />
          <Informations>(480) 555-0103</Informations>
        </GroupInformations>
        <GroupSocialMedia>
          <FacebookLogo
            size={24}
            weight="bold"
            color={`${DefaultTheme.colors.white}`}
          />
          <InstagramLogo
            size={24}
            weight={"bold"}
            color={`${DefaultTheme.colors.white}`}
          />
          <TwitterLogo
            size={24}
            weight={"bold"}
            color={`${DefaultTheme.colors.white}`}
          />
          <YoutubeLogo
            size={24}
            weight={"bold"}
            color={`${DefaultTheme.colors.white}`}
          />
        </GroupSocialMedia>
      </SectionInformations>
      )}
      <GroupSection>
        <NavContent>
          {!isNotbook && (
            <>
              {LinksBeforeImage.map((LinksBeforeImage, index) => (
                <LinksNav key={index}>{LinksBeforeImage}</LinksNav>
              ))}
              <LogoSpace />
              <ImageContainer>
                <img
                  src={logo}
                  alt="logo com uma imagem de montanha do lado esquerdo e o nome da marca do lado APPOLY"
                />
              </ImageContainer>

              {LinksAfterImage.map((LinksAfterImage, index) => (
                <LinksNav key={index}>{LinksAfterImage}</LinksNav>
              ))}

              <ButtonStyle
                bgColor={`${DefaultTheme.colors["Royal blue"]}`}
                fontSize="20px"
                borderRadius="5px"
                color={`${DefaultTheme.colors.white}`}
                width={"158px"}
                height={"50px"}
              >
                DOWNLOAD
              </ButtonStyle>
            </>
          )}

          {isNotbook && (
            <>
              <Sidebar />
              <LogoSpace />
              <ImageContainer>
                <img
                  src={logo}
                  alt="logo com uma imagem de montanha do lado esquerdo e o nome da marca do lado APPOLY"
                />
              </ImageContainer>

              <ButtonStyle
                bgColor={`${DefaultTheme.colors["Royal blue"]}`}
                fontSize="20px"
                borderRadius="5px"
                color={`${DefaultTheme.colors.white}`}
                width={"158px"}
                height={"50px"}
                mobileWidth={"76px"}
                mobileHeight={"34px"}
                mobileFont={"10px"}
              >
                DOWNLOAD
              </ButtonStyle>
            </>
          )}
        </NavContent>
      </GroupSection>
    </HeaderContainer>
  );
}
