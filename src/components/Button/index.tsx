import { ReactNode } from "react"
import { ButtonStyle } from "./styled"

export interface ButtonProps {
    width: string;
    height: string;
    borderRadius: string;
    fontSize: string;
    bgColor: string;
    children:ReactNode;
    color:string;
    mobileWidth?: string;
    mobileHeight?: string;
    mobileFont?: string;
}
export function Button({bgColor,borderRadius,children,fontSize,width,height,color,mobileWidth,mobileHeight,mobileFont}:ButtonProps){
   
    return(
    <ButtonStyle 
        bgColor={bgColor} 
        borderRadius={borderRadius}  
        fontSize={fontSize} 
        width={width}
        height={height}
        color={color}
        mobileWidth={mobileWidth}
        mobileHeight={mobileHeight}
        mobileFont={mobileFont}
    >
            {children}

     </ButtonStyle>
    )
}