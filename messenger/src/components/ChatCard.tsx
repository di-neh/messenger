import { PinIcon} from "lucide-react";
import styled, {css} from "styled-components";
import {IChatData} from "../Types.ts";
import * as React from "react";
import kit from "../assets/kit.jpg";

interface CardProps {
    isSelected: boolean;
}


const Card = styled.div<CardProps>`
    display: flex;
    padding: 0 10px;
    border-radius: 15px;
    margin-bottom: 5px;
    background: ${(props) => (props.isSelected ? "rgb(118,106,200)" : "initial")};

    &:hover {
        ${(props) =>
                !props.isSelected &&
                css`
        background: #2a2a2a;
      `}
    }

    }
    
    
    
`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Info = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    width: 100%;
`
const TextConteiner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

interface IchatCard {
    chat: IChatData;
    isSelected: boolean;
    onClick: () => void;
}

const ChatCard:React.FC<IchatCard> = ({chat, isSelected, onClick}) => {


    return (
        <Card isSelected={isSelected} onClick={onClick}>
            <Logo>
                <img src={kit} style={{height:"54px", borderRadius:"50%"}} alt={""}/>
            </Logo>
            <Info>
                <TextConteiner>
                    <strong style={{marginBottom:'5px'}}>
                        {chat.sender}
                    </strong>
                    <small style={{marginBottom:'5px'}}>
                        27 мая
                    </small>
                </TextConteiner>
                <TextConteiner>
                    <div>
                        {chat.lastMessage}
                    </div>
                    <div>
                        <PinIcon size={20}></PinIcon>
                    </div>
                </TextConteiner>
            </Info>
        </Card>
    );
}

export default ChatCard;