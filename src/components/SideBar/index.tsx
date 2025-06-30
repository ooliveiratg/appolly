import { List, X } from "@phosphor-icons/react";
import { ButtonStyle } from "../Button/styled";
import { useState } from "react";
import { SideBarItens } from "./data";
import { ContainerLinksSideBar, GroupLinksSideBar, LinksNavSidebar, PositionButton} from "./styled";
import { DefaultTheme } from "../../themes/default";


export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose,setIsClose] = useState(false)

  const handleSideBar = () => {
    setIsOpen(!isOpen);
  };
  
  const handleCloseSideBar =() => {
    setIsClose(false)
    if(isOpen){
      setIsOpen(isClose)
    }
  }

  return (
    <>
      <ButtonStyle
        bgColor={`transparent`}
        fontSize=""
        borderRadius=""
        color={`black`}
        width={''}
        height={''}
        onClick={handleSideBar}
        children={<List size={32} weight="bold" alt="menu" />}
      />
      {console.log(isOpen)}

      {isOpen && (
       <ContainerLinksSideBar >
        <PositionButton>          
          <ButtonStyle
           bgColor={`${DefaultTheme.colors["Royal blue"]}`} 
           borderRadius={'50%'}  
           fontSize={''} 
           width={'35px'}
           height={'35px'}
           color={`${DefaultTheme.colors.white}`}
           onClick={handleCloseSideBar}
           children={<X size={20} weight="bold" style={{cursor: 'pointer'}}/> }
           />
           </PositionButton>

            <GroupLinksSideBar >
                {SideBarItens.map((item, index) => (
                <LinksNavSidebar key={index}>{item.toUpperCase()}</LinksNavSidebar> 
                 ))}
              </GroupLinksSideBar>
        </ContainerLinksSideBar>
      )}
    </>
  );
}
