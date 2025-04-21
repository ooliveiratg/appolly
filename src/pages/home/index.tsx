import { CardHero, CardHeroContainer, GroupButtons, HeroParagraph, HeroSubTitlte, HeroTitle, ImageHero, SectionHero } from "./styled";
import CellPhoneImageHero from '../../assets/Home/cellphoneHero.png'
import { Button } from "../../components/Button";
import PlayStoreImageCard from '../../assets/Home/playStore.png'
import AppleStoreImageCard from '../../assets/Home/AppleStore.png'


export function Home() {
    return(
       <>
        <SectionHero>
            <CardHeroContainer>           
                <CardHero>
                    <HeroTitle>A Great App Makes
                    Your Life Better</HeroTitle>
                    <HeroParagraph>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </HeroParagraph>
                    <HeroSubTitlte>
                    DOWNLOAD APP NOW
                    </HeroSubTitlte>
                    <GroupButtons>
                        <Button padding={""} borderRadius={""} fontSize={""} bgColor={""} children={<img src={PlayStoreImageCard} alt=""/>} color={""}>
                        </Button>

                        <Button padding={""} borderRadius={""} fontSize={""} bgColor={""} children={<img src={AppleStoreImageCard} alt=""/>} color={""}>
                        </Button>
                    </GroupButtons>
                </CardHero>
            </CardHeroContainer>
            <ImageHero>
                <img src={CellPhoneImageHero} alt="" />
            </ImageHero>
        </SectionHero>
       </>
    )
}