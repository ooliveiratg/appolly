import { FeatureParagraph, FeaturesContainer, TitleFeature } from "./styled";
import { InformationsOfCellphone, Position } from "./Data";

import {
  BoxFeatures,
  GroupInformationsOfDesign,
  InformationsOfSmartphone,
  SubTitleOfBox,
  TitleOfBox,
  WrapperInformationsOfSmartphone,
} from "../../../components/BoxInfo/styled";

import Cellphone from "../../../assets/Features/icons/App.png";
import { ImageCellphone } from "../About/styled";

export function Feature() {
  const rightItems = InformationsOfCellphone.filter(
    (info) => info.position === Position.right
  );

  const leftItems = InformationsOfCellphone.filter(
    (info) => info.position === Position.left
  );

  const centerItems = InformationsOfCellphone.filter(
    (info) => info.position === Position.center
  );

  return (
    <FeaturesContainer>
      <TitleFeature>APP FEATURES</TitleFeature>
      <FeatureParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </FeatureParagraph>
      <InformationsOfSmartphone>
        <WrapperInformationsOfSmartphone>
          {rightItems.map((info, index) => (
            <GroupInformationsOfDesign
              key={index}
              layoutPosition={info.position}
            >
              <BoxFeatures layoutPosition={info.position}>
                {info.icon}
                <TitleOfBox>{info.title}</TitleOfBox>
                <SubTitleOfBox>{info.Description}</SubTitleOfBox>
              </BoxFeatures>
            </GroupInformationsOfDesign>
          ))}
        </WrapperInformationsOfSmartphone>
        <WrapperInformationsOfSmartphone>
          {centerItems && (
            <>
              <GroupInformationsOfDesign
                layoutPosition={centerItems[0].position}
              >
                <BoxFeatures layoutPosition={centerItems[0].position}>
                  {centerItems[0].icon}
                  <TitleOfBox>{centerItems[0].title}</TitleOfBox>
                  <SubTitleOfBox>{centerItems[0].Description}</SubTitleOfBox>
                </BoxFeatures>
              </GroupInformationsOfDesign>

              <ImageCellphone src={Cellphone}/>

              <GroupInformationsOfDesign
                layoutPosition={centerItems[1].position}
              >
                <BoxFeatures layoutPosition={centerItems[1].position}>
                  {centerItems[1].icon}
                  <TitleOfBox>{centerItems[1].title}</TitleOfBox>
                  <SubTitleOfBox>{centerItems[1].Description}</SubTitleOfBox>
                </BoxFeatures>
              </GroupInformationsOfDesign>
            </>
          )}
          
        </WrapperInformationsOfSmartphone>

         <WrapperInformationsOfSmartphone>
          {leftItems.map((info, index) => (
            <GroupInformationsOfDesign
              key={index}
              layoutPosition={info.position}
            >
              <BoxFeatures layoutPosition={info.position}>
                {info.icon}
                <TitleOfBox>{info.title}</TitleOfBox>
                <SubTitleOfBox>{info.Description}</SubTitleOfBox>
              </BoxFeatures>
            </GroupInformationsOfDesign>
          ))}
        </WrapperInformationsOfSmartphone>
      </InformationsOfSmartphone>
    </FeaturesContainer>
  );
}
