import styled from "styled-components";

interface FeatureStyledProps {
    layoutPosition: 'left' | 'right' | 'center' | undefined;

}


export const InformationsOfSmartphone = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;

    @media (max-width: 840px) {
        gap: 18px;
        flex-direction: column;
    }
`

export const WrapperInformationsOfSmartphone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 60px;
`


export const GroupInformationsOfDesign = styled.div<FeatureStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => props.layoutPosition === 'center'? 'column' : 'row'};

    @media (max-width: 556px) {
    flex-direction: column;        
    }
`

export const BoxFeatures = styled.div<FeatureStyledProps>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.layoutPosition === "left" ? 'start' : props.layoutPosition === "right" ? 'end' : 'center'};
    justify-content: center;
    text-align:  ${(props) => props.layoutPosition === "left" ? 'start' : props.layoutPosition === "right" ? 'end' : 'center'};

    @media (max-width: 556px) {
    text-align: center;
    align-items: center;        
    }
`

export const  TitleOfBox = styled.h3`
    font-size: 25px;
    margin: 22px 0 18px 0;
    font-weight: 600;
`
export const SubTitleOfBox = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 297px;
    margin-bottom: 60px;
`
