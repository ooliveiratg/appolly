import { ContainerCardInformations, DescriptionCard, GroupTextsCard, TitleCard } from "./styled"
import Check from '../../assets/About/Check.svg'
export interface CardsProps{
    width:string,
    height:string,
    title:string,
    description:string,
    padding:string
}

export function CardInformations({description,height,title,width,padding}:CardsProps) {
    return(
        <ContainerCardInformations
         width={width} 
         height={height} 
         padding={padding}
         >
            <img src={Check} alt="" />
        <GroupTextsCard>
            <TitleCard>{title}</TitleCard>
            <DescriptionCard>{description}</DescriptionCard>
        </GroupTextsCard>

    </ContainerCardInformations>
    )
}