import { ContainerCardInformations, DescriptionCard, GroupTextsCard, TitleCard } from "./styled"
import Check from '../../assets/About/Check.svg'
export interface CardsProps{
    width:string,
    height:string,
    title:string,
    description:string,
}

export function CardInformations({description,height,title,width}:CardsProps) {
    return(
        <ContainerCardInformations
         width={width} 
         height={height} 
         >
            <img src={Check} alt="" />
        <GroupTextsCard>
            <TitleCard>{title}</TitleCard>
            <DescriptionCard>{description}</DescriptionCard>
        </GroupTextsCard>

    </ContainerCardInformations>
    )
}