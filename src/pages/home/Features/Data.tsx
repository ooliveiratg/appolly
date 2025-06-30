import { ChatDots, DeviceMobile } from "@phosphor-icons/react";
import GiftWeb from '../../../assets/Features/icons/giftWeb.svg'

import pencil from '../../../assets/Features/icons/pencil.svg'

import eye from '../../../assets/Features/icons/eye-scanner.svg' 

import telemarketing from '../../../assets/Features/icons/male-telemarketer.svg'

 export enum Position {
    center = 'center',
    left = 'left',
    right = 'right'
}

export const InformationsOfCellphone = [
    {   
        position: Position.center,
        icon:(
            <ChatDots size={64} weight={"fill"} color="#FFFFFF"/>
        ),
        title:'Full free chat',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        position: Position.left,
        icon:(
            <img src={GiftWeb} alt="" />
        ),
        title:'unlimiter features',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

    {
        position: Position.left,
        icon:(
            <img src={pencil} alt="" />
        ),
        title:'awsome ui design',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

    {
        position: Position.right,
        icon:(
            <DeviceMobile fontSize={64} weight={"fill"} color="#FFFFFF"/>
        ),
        title:'iso & androind version',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

    {
        position: Position.right,
        icon:(
            <img src={eye} alt="" />
        ),
        title:'retina ready greaphics',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

    {
        position: Position.center,
        icon:(
            <img src={telemarketing} alt="" />
        ),
        title:'24/7 support by real pepole',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }

]