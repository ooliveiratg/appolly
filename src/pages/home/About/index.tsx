import { CardInformations } from "../../../components/Card";
import { AboutParagraph, BoxShadowImg, ContainerGroup, GroupCardsInformations, GroupImage, ImageCellphone, SectionAbout, TitleAbout } from "./styled";

import cellphoneImage from '../../../assets/About/cellphone.png'
import { CardContent, CardContentMobile } from "./data";
import { useEffect, useState } from "react";

export function About() {
    const [isMobile,setIsMobile] = useState(window.innerWidth <=780)
     
    useEffect(()=> {
        const handleIsMobile = () => {
            setIsMobile(window.innerWidth <=884)
        }
        window.addEventListener("resize",handleIsMobile)
        return () => window.removeEventListener("resize",handleIsMobile)
    })
    return(
        <SectionAbout>
            <TitleAbout>ABOUT OUR APP</TitleAbout>
            <AboutParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</AboutParagraph>

            <ContainerGroup>
                <GroupImage>
                    <ImageCellphone src={cellphoneImage}/>
                    <BoxShadowImg/>
                </GroupImage>
                    <GroupCardsInformations>
                    {!isMobile&& CardContent.map((CardContent,index) =>(
                         <CardInformations key={index} width={"570px"} height={"160px"} title={`${CardContent.title.toUpperCase()}`} description={`${CardContent.description}`} padding={"30px 20px 21px 18px"}/>
                    ))}

                    {isMobile &&
                    (
                        CardContentMobile.map((CardContentMobile,index) =>(
                            <CardInformations key={index} width={"343px"} height={"110px"} title={`${CardContentMobile.title.toUpperCase()}`} description={`${CardContentMobile.description}`} padding={"18px 30px 10px 19px"}/>
                       ))
                    )
                    }
                    </GroupCardsInformations>
                    
            </ContainerGroup>
        </SectionAbout>

    
    )
}