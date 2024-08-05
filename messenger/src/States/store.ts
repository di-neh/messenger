import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IMessage} from "../Types.ts";

interface AppState {
    selectCard: number | null;
    selectedSender: string;
    messages: IMessage[];
}

const initialState: AppState = {
    selectCard: null,
    selectedSender: ' ',
    messages: [
        { id: 1, text: 'Так не к месту появляются слова', chat: 1},
        { id: 2, text: 'В этой песне должна быть только тишина', chat: 1 },
        { id: 3, text: 'Ветви на руках не Исчезнут никогда', chat: 1 },
        { id: 4, text: 'Память ложится веревкой на шею', chat: 2},
        { id: 5, text: 'Архив неудач и моих поражений', chat: 2 },
        { id: 7, text: 'Я как овощ зелёный лежу на земле', chat: 3},
        { id: 8, text: 'За мной едет ярко-красная скорая помощь,', chat: 3 },
        { id: 9, text: 'Hо я не нужен ни ей, ни тебе ', chat: 3 },

    ],
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSelectCard(state, action: PayloadAction<number | null>) {
            state.selectCard = action.payload;
        },
        setSelectedSender(state, action: PayloadAction<string>) {
            state.selectedSender = action.payload;
        },
        addMessage(state, action: PayloadAction<IMessage>){
            state.messages.push(action.payload);
        }
    },
});

export const { setSelectCard, setSelectedSender, addMessage } = appSlice.actions;

const store = configureStore({
    reducer: {
        app: appSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
