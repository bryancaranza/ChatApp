import useMessageHooks from "@/hooks/useMessageHooks";
import { ROUTES } from "@/routes/routes";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import MessageBar from "./MessageBar";
import { useChatStore } from "@/state/zustand/chatStore";
import { useAuthStore } from "@/state/zustand/authStore";
import Icon from "@/components/custom/Icon";

const Message = () => {
  const params = useParams();
  const { user } = useAuthStore();
  const { getMessages, getChatRooms } = useMessageHooks();
  const { selectedChatroom, setSelectedChatroom, messages, setMessages } =
    useChatStore();

  const navigate = useNavigate();

  const chatWith = selectedChatroom?.users?.filter(
    (chatuser: any) => chatuser.id !== user?.id
  );

  useEffect(() => {
    getChatRooms((response) => {
      const selectedChat = response.filter(
        (selected: any) => selected.id === params.id
      )?.[0];

      console.log(selectedChat);
      setSelectedChatroom(selectedChat);

      if (!selectedChat) return navigate(ROUTES.DASHBOARD);
    });
    getMessages(params?.id!, (response) => {
      console.log(response);

      setMessages(response);
    });
  }, [params]);

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="min-h-[50px] flex w-full items-center">
        <Header
          name={
            selectedChatroom?.chat_room_name ||
            `${chatWith?.[0].firstname || ""} ${chatWith?.[0].lastname || ""}`
          }
          sub={chatWith?.[0].username}
        />
      </div>
      <div className="h-full flex flex-col gap-2 py-4 px-2">
        {messages?.map((message: any) => {
          return (
            <div className="flex w-full gap-2">
              <div className="flex justify-center p-2">
                <Icon className="!bg-[#0B101B] !w-10 !h-10">
                  {`${message.sent_by.firstname} ${message.sent_by.lastname}`}
                </Icon>
              </div>
              <div className="flex flex-col gap-2 w-full py-2">
                <p className="text-md font-semibold capitalize ">
                  {`${message.sent_by.firstname} ${message.sent_by.lastname}`}
                </p>
                <p className="text-sm text-gray-300 ">{message.message}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <MessageBar />
      </div>
    </div>
  );
};

export default Message;
