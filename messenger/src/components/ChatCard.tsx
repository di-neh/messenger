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
    cursor: pointer;
    
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
const Chat = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`

interface IchatCard {
    chat: IChatData;
    isSelected: boolean;
    onClick: () => void;
    lastMessage: string;
}

const ChatCard:React.FC<IchatCard> = ({chat, isSelected, onClick, lastMessage}) => {


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
                    <Chat>
                        {lastMessage}
                    </Chat>
                    <div>
                        <PinIcon size={20}></PinIcon>
                    </div>
                </TextConteiner>
            </Info>
        </Card>
    );
}

export default ChatCard;