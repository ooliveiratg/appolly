import { ReactNode } from "react"
import { ButtonStyle } from "./styled"

export interface ButtonProps {
    padding: string;
    borderRadius: string;
    fontSize: string;
    bgColor: string;
    children:ReactNode;
    color:string;
}
export function Button({bgColor,borderRadius,children,fontSize,padding,color}:ButtonProps){
   
    return(
    <ButtonStyle 
        bgColor={bgColor} 
        borderRadius={borderRadius}  
        fontSize={fontSize} 
        padding={padding}
        color={color}
    >
            {children}

     </ButtonStyle>
    )
}