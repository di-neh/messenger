import ChatCard from "../components/ChatCard.tsx";
import styled from "styled-components";
import {useState} from "react";
import {IChatData} from  "../Types.ts"


const Side = styled.div`
    padding: 10px;
`

const Sidebar = () => {

    const [chats] = useState<IChatData[]>([
        { id: 1, sender: 'Избранное', lastMessage: 'Курсовая кринж' },
        { id: 2, sender: 'Дедор блинб', lastMessage: 'Че с курсовой?' },
        { id: 3, sender: 'Чуваш', lastMessage: 'Я тупой качок' },

    ]);
    const [selectCard, setSelect] = useState<number | null>(null);
    const hacdleSelect = (id: number) => {
        setSelect(id)
    }

    return (
        <Side>

            {chats.map((chat) => (
                <ChatCard
                    key={chat.id}
                    chat={chat}
                    isSelected={chat.id === selectCard}
                    onClick={() => hacdleSelect(chat.id)}
                />
            ))}
        </Side>
    );
}

export default Sidebar;