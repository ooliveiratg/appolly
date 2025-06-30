import { Position } from "../../pages/home/Features/Data";
import {
  BoxFeatures,
  GroupInformationsOfDesign,
  InformationsOfSmartphone,
  SubTitleOfBox,
  TitleOfBox,
  WrapperInformationsOfSmartphone,
} from "./styled";

export interface BoxInfoProps {
  title: string;
  description: string;
  position: Position;
}

export function BoxInfo({ description, title, position }: BoxInfoProps) {
  return (
    <InformationsOfSmartphone>
      <WrapperInformationsOfSmartphone>
        <GroupInformationsOfDesign layoutPosition={position}>
          <BoxFeatures layoutPosition={position}>
            <TitleOfBox>{title}</TitleOfBox>
            <SubTitleOfBox>{description}</SubTitleOfBox>
          </BoxFeatures>
        </GroupInformationsOfDesign>
      </WrapperInformationsOfSmartphone>
    </InformationsOfSmartphone>
  );
}
