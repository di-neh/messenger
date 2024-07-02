import styled, { css } from "styled-components";
import { MenuIcon, Search } from "lucide-react";
import { useRef, useState } from "react";
import Sidebar from "./Sidebar.tsx";


const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
`;

const Menu = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background: #212121;
    border: 0;
    border-radius: 50%;
    margin-right: 15px;

    &:hover {
        background: #2a2a2a;
    }
`;

const SearchBox = styled.div<{ isFocused: boolean }>`
    display: flex;
    flex-direction: row;
    width: 100%;
    background: #2a2a2a;
    padding: 7px 15px;
    border-radius: 20px;
    border: 2px solid transparent; /* Добавлено для отображения изменения рамки */
    ${(props) =>
            props.isFocused &&
            css`
                border-color: rgb(135,116,225); /* Цвет рамки при фокусе */
            `}
`;

const Input = styled.input`
    border: none;
    width: 100%;
    margin-left: 10px;
    background: #2a2a2a;
    color: white; /* Цвет текста */
    &:focus {
        outline: none;
    }
`;

export function Layout() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleWrapperClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <>
            <Header>
                <Menu>
                    <MenuIcon color="white" size={35} />
                </Menu>
                <SearchBox onClick={handleWrapperClick} isFocused={isFocused}>
                    <div>
                        <Search color={isFocused ? "rgb(135,116,225)" : "grey"} size={20} />
                    </div>
                    <Input
                        ref={inputRef}
                        type="text"
                        placeholder="Поиск"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </SearchBox>
            </Header>
            <Sidebar></Sidebar>
        </>

    );
}
