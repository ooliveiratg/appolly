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
}
export function Button({bgColor,borderRadius,children,fontSize,width,height,color}:ButtonProps){
   
    return(
    <ButtonStyle 
        bgColor={bgColor} 
        borderRadius={borderRadius}  
        fontSize={fontSize} 
        width={width}
        height={height}
        color={color}
    >
            {children}

     </ButtonStyle>
    )
}