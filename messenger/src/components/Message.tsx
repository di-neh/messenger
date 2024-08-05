import * as React from "react";
import {Check} from "lucide-react";
import styled from "styled-components";
import {IMessage} from "../Types.ts";

const Wrapper = styled.div` 
    display: flex;
    padding: 5px;
    border-radius: 20px;
    background: mediumpurple;
    align-items: end;
    margin-top: 5px;
`
const MesText = styled.span` 
    margin-right: 7px;
    font-size: 16px;
    padding: 3px;
`
const MesInfo = styled.div` 
    height: 17px;
    display: flex;
    position: relative;
    top: 3px;
`

interface IMessageBox {
    message: IMessage;
}

const Message: React.FC<IMessageBox> = ({message}) => {
    return (
        <Wrapper>
            <MesText>{message.text}</MesText>
            <MesInfo>
                <span style={{fontSize:"small"}}>20:58</span>
                <Check size={16}></Check>
            </MesInfo>

        </Wrapper>
    );
};

export default Message;