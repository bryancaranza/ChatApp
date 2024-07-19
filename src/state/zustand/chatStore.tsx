import { create } from "zustand";

interface IChatStore {
  message: string;
  setMessage: (message: string) => void;
  messages: any[];
  setMessages: (messages: any[]) => void;
  myChatrooms: any[];
  setMyChatrooms: (myChatrooms: any[]) => void;
  selectedChatroom: any;
  setSelectedChatroom: (selectedChatroom: any) => void;
  chatMessagesList: any[];
  setChatMessagesList: (chatMessages: any[]) => void;
}

export const useChatStore = create<IChatStore>()((set) => {
  return {
    message: "",
    setMessage: (message: string) => set({ message }),
    messages: [],
    setMessages: (messages: any[]) => set({ messages }),
    chatMessagesList: [],
    setChatMessagesList: (chatMessagesList: any[]) => set({ chatMessagesList }),
    selectedChatroom: {},
    setSelectedChatroom: (selectedChatroom: any) => set({ selectedChatroom }),
    myChatrooms: [],
    setMyChatrooms: (myChatrooms: any[]) => set({ myChatrooms }),
  };
});
