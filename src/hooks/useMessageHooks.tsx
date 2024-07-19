import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/firebase";
import { CONSTANTS } from "@/lib/static";
import { useAuthStore } from "@/state/zustand/authStore";
import { useChatStore } from "@/state/zustand/chatStore";
import { ref, set, push, onValue, query } from "firebase/database";
import moment from "moment";
import { useState } from "react";
import { useParams } from "react-router-dom";

const useMessageHooks = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuthStore();
  const { message, setMessage, selectedChatroom } = useChatStore();

  const params = useParams();

  const today = moment().format();

  const createChatRoom = async (
    data: any,
    callback?: {
      onSuccess?: (chatroomId: string) => void;
      onError?: () => void;
    }
  ) => {
    const newDocRef = push(ref(db, CONSTANTS.ENDPOINTS.CHATROOMS)); // creating unique id
    const id = `chatroom-${newDocRef.key}`; // unique id

    setIsLoading(true); // start loading

    try {
      const payload = {
        ...data,
        id,
        date_created: today,
      };

      await set(newDocRef, payload);

      setIsLoading(false); // done loading
      // run success callback
      if (callback?.onSuccess) callback.onSuccess(id);
    } catch (error) {
      setIsLoading(false); // done loading
      console.log(error);

      // run error callback
      if (callback?.onError) callback.onError();
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "ERROR: createChatRoom, Please try again.",
      });
    }
  };

  const getChatRooms = (callback: (response: any) => void) => {
    const dbRef = ref(db, CONSTANTS.ENDPOINTS.CHATROOMS); // setting database reference
    const dbQuery = query(dbRef);

    setIsLoading(true); // initialize loading

    onValue(dbQuery, (snapshot) => {
      if (!snapshot?.val() && callback) {
        return callback([]);
      }
      const data: any[] = Object.values(snapshot.val()); // query result data
      setIsLoading(false); // done loading

      // run success callback
      if (callback) callback(data || []);
    });
  };

  const haveChatRoom = (
    userId: string,
    callback: (hasChatRoom: boolean, chatroom: any) => void
  ) => {
    getChatRooms((response) => {
      console.log(response);
      const filter: any[] = response.filter(
        (room: any) =>
          room.users[0].id.includes(user?.id) &&
          room.users[1].id.includes(userId)
      );

      if (callback) callback(filter.length > 0, filter);
    });
  };

  const getMessages = (
    chatroom: string,
    callback: (response: any) => void,
    getAll?: boolean
  ) => {
    const dbRef = ref(db, CONSTANTS.ENDPOINTS.MESSAGES); // setting database reference
    const dbQuery = query(dbRef);

    setIsLoading(true); // initialize loading

    onValue(dbQuery, (snapshot) => {
      if (!snapshot?.val() && callback) {
        return callback([]);
      }
      const messages: any[] = Object.values(snapshot.val()); // query result data
      const filter: any[] = messages.filter(
        (message: any) => message.chat_room_id === chatroom
      );

      console.log(filter);

      setIsLoading(false); // done loading

      // run success callback
      if (callback) callback(getAll ? messages || [] : filter);
    });
  };

  const sendMessages = async (
    data: any,
    callback?: {
      onSuccess?: () => void;
      onError?: () => void;
    }
  ) => {
    const newDocRef = push(ref(db, CONSTANTS.ENDPOINTS.MESSAGES)); // creating unique id
    const id = `message-${newDocRef.key}`; // unique id

    const chatWith = selectedChatroom.users?.filter(
      (chatuser: any) => chatuser.id !== user?.id
    );

    if (!message) return;

    setIsLoading(true); // start loading

    try {
      const payload = {
        ...data,
        chat_room_id: params.id,
        message,
        sent_by: user,
        recieved_by: chatWith[0],
        id,
        date_created: today,
      };
      console.log(payload);

      await set(newDocRef, payload);

      setIsLoading(false); // done loading

      setMessage("");

      // run success callback
      if (callback?.onSuccess) callback.onSuccess();
    } catch (error) {
      setIsLoading(false); // done loading

      // run error callback
      if (callback?.onError) callback.onError();
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "ERROR: sendMessages, Please try again.",
      });
    }
  };

  return {
    createChatRoom,
    getChatRooms,
    getMessages,
    sendMessages,
    haveChatRoom,
    isLoading,
  };
};

export default useMessageHooks;
