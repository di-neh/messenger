import styled from "styled-components";
import {Paperclip, SendHorizontal, Smile} from "lucide-react";
import Message from "./Message.tsx";
import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMessage, RootState} from "../States/store.ts";
import * as React from "react";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: relative;
`;

const Enter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    position: absolute;
    bottom: 50px; /* Размещаем Enter внизу экрана */
    padding: 20px;
    box-sizing: border-box;
`;

const MessageWrapper = styled.div`
    margin-bottom: 15px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: end;
`;

const SearchBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background: #2a2a2a;
    padding: 7px 15px;
    border-radius: 20px;
    border: 2px solid transparent;
    height: 50px;
    box-sizing: border-box;
`;

const Input = styled.input`
    border: none;
    width: 100%;
    margin-left: 10px;
    background: #2a2a2a;
    color: white;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-size: large;
    }
`;

const Button = styled.button`
    border-radius: 50%;
    margin-left: 15px;
    box-sizing: border-box;
    width: 52px;
    height: 52px;
    border: none;
    background: #2a2a2a;
    cursor: pointer;
`;



const Dialog:FC = () => {
    const selectCard = useSelector((state: RootState) => state.app.selectCard);
    const messages = useSelector((state: RootState) => state.app.messages);
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');



    const ChatChooseFilter = messages.filter(
        (message) => message.chat === selectCard
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() && selectCard !== null) {
            dispatch(addMessage({ id: Date.now(), text: message, chat: selectCard }));
            setMessage("");
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <Wrapper>
            <Enter>
                <MessageWrapper>
                    {ChatChooseFilter.map((message) => (
                        <Message
                            key={message.id}
                            message={message}
                        />
                    ))}
                </MessageWrapper>
                <SearchBoxWrapper>
                    <SearchBox>
                        <div>
                            <Smile size={30} color={"grey"} />
                        </div>
                        <Input
                            type="text"
                            placeholder="Сообщение"
                            value={message}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                        />
                        <Paperclip />
                    </SearchBox>
                    <Button onClick={handleSendMessage}>
                        <SendHorizontal size={25} color={"rgb(118,106,200)"}/>
                    </Button>
                </SearchBoxWrapper>
            </Enter>
        </Wrapper>
    );
};

export default Dialog;