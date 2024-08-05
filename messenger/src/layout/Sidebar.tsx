import ChatCard from "../components/ChatCard.tsx";
import styled from "styled-components";
import {useState} from "react";
import {IChatData} from  "../Types.ts"
import {useDispatch, useSelector} from "react-redux";
import {RootState, setSelectCard, setSelectedSender} from "../States/store.ts";

const Side = styled.div`
    padding: 10px;
`

const Sidebar = () => {


    const [chats] = useState<IChatData[]>([
        { id: 1, sender: 'Избранное', lastMessage: '' },
        { id: 2, sender: 'Дедор блинб', lastMessage: '' },
        { id: 3, sender: 'Чуваш', lastMessage: '' },

    ]);

    const dispatch = useDispatch();
    const selectCard = useSelector((state: RootState) => state.app.selectCard)
    const messages = useSelector((state: RootState) => state.app.messages)

    const getLastMessage = (chatId: number) => {
        const chatMessages = messages.filter(message => message.chat === chatId);
        return chatMessages.length > 0 ? chatMessages[chatMessages.length - 1].text : '';
    }

    const handleCardClick = (chatId: number, sender: string) => {
        dispatch(setSelectCard(chatId));
        dispatch(setSelectedSender(sender));
    };

    return (
        <Side>

            {chats.map((chat) => (
                <ChatCard
                    key={chat.id}
                    chat={chat}
                    isSelected={chat.id === selectCard}
                    onClick={() => handleCardClick(chat.id, chat.sender)}
                    lastMessage={getLastMessage(chat.id)}
                />
            ))}
        </Side>
    );
}

export default Sidebar;