export interface IChatData {
    id: number;
    sender: string;
    lastMessage: string;
}

export interface IMessage {
    id: number;
    sender?: string;
    isRead?: boolean;
    date?: string;
    text: string;
    chat?: number;
}