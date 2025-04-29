import { CardInformations } from "../../../components/Card";
import { AboutParagraph, ContainerGroup, GroupCardsInformations, SectionAbout, TitleAbout } from "./styled";

import cellphoneImage from '../../../assets/About/cellphone.png'
import { CardContent } from "./data";

export function About() {
    return(
        <SectionAbout>
            <TitleAbout>ABOUT OUR APP</TitleAbout>
            <AboutParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</AboutParagraph>

            <ContainerGroup>
                <img src={cellphoneImage} alt="" />
                
                    <GroupCardsInformations>
                    { CardContent.map((CardContent,index) =>(
                         <CardInformations key={index} width={"570px"} height={"160px"} title={`${CardContent.title.toUpperCase()}`} description={`${CardContent.description}`}/>
                    ))}
                    </GroupCardsInformations>
                
            </ContainerGroup>
        </SectionAbout>

    
    )
}