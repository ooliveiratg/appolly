import { CardHero, CardHeroContainer, GroupButtons, HeroParagraph, HeroSubTitlte, HeroTitle, ImageHero, SectionHero } from "./styled";
import CellPhoneImageHero from '../../assets/Home/cellphoneHero.png'
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
                    <img src={PlayStoreImageCard} alt="" />

                    <img src={AppleStoreImageCard} alt="" />
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