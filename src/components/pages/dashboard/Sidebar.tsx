import Icon from "@/components/custom/Icon";
import SearchIcon from "@/components/icons/SearchIcon";
import useMessageHooks from "@/hooks/useMessageHooks";
import { ROUTES } from "@/routes/routes";
import { useAuthStore } from "@/state/zustand/authStore";
import { useChatStore } from "@/state/zustand/chatStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user } = useAuthStore();
  const { setMyChatrooms, myChatrooms, setSelectedChatroom } = useChatStore();
  const { getChatRooms } = useMessageHooks();

  const getMyChats = () => {
    getChatRooms((response) => {
      const myChats = response.filter(
        (chatroom: any) =>
          chatroom.users.filter((chatuser: any) =>
            chatuser.id.includes(user?.id)
          )?.length
      );

      setMyChatrooms(myChats);
    });
  };

  useEffect(() => {
    getMyChats();
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center">
      <Link className="w-full" to={ROUTES.DASHBOARD}>
        <div className="flex items-center justify-center lg:justify-start gap-2 w-full pt-2 hover:bg-slate-900/90 py-2 rounded-md mt-2">
          {/* <div className="w-2 h-[80%] bg-white" /> */}
          <Icon>{`${user?.firstname} ${user?.lastname}`}</Icon>
          <div className="hidden lg:flex flex-col justify-center">
            <p className="text-2xl capitalize">{`${user?.firstname} ${user?.lastname}`}</p>
            <p className="text-gray-500">{user?.username}</p>
          </div>
        </div>
      </Link>
      <div className="px-2 w-full">
        <div className="w-full border-gray-800 border-t-[1px]" />
      </div>
      <div className="flex flex-col items-center md: w-full">
        <Link className="w-full" to={ROUTES.SEARCH}>
          <div className="flex justify-center items-center gap-2 lg:justify-start w-full  hover:bg-slate-900/90 py-2 rounded-md">
            {/* <div className="w-2 h-[80%] bg-white" /> */}
            <Icon>
              <SearchIcon className="w-[20px] h-[20px]" />
            </Icon>
            <p className="hidden lg:block">Search Friend</p>
          </div>
        </Link>
        {myChatrooms.map((chatroom) => {
          const chatWith = chatroom.users.filter(
            (chatuser: any) => chatuser.id !== user?.id
          );

          const chatWithName = chatWith
            .map((chatroom: any) => {
              return `${chatroom.firstname} ${chatroom.lastname}`;
            })
            .join(" ");

          return (
            <Link
              key={chatroom.id}
              className="w-full"
              to={`${ROUTES.MESSAGE}/${chatroom.id}`}
              onClick={() => setSelectedChatroom(chatroom)}
            >
              <div className="flex w-full gap-2 items-center justify-center lg:justify-start hover:bg-slate-900/90 py-2 rounded-md">
                {/* <div className="w-2 h-[80%] bg-white" /> */}
                <Icon>{chatWithName}</Icon>
                <div className="hidden lg:flex flex-col justify-center">
                  <p className="text-xl capitalize truncate w-56">{`${chatWithName}`}</p>
                  <p className="text-gray-500 truncate w-56">
                    {chatWith?.[0].username}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
