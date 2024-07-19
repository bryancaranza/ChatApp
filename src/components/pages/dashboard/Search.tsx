import { ROUTES } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useUserStore } from "@/state/zustand/userStrore";
import Icon from "@/components/custom/Icon";
import UserGroupIcon from "@/components/icons/UserGroupIcon";
import useMessageHooks from "@/hooks/useMessageHooks";
import { useAuthStore } from "@/state/zustand/authStore";

const Search = () => {
  const { searchUserList } = useUserStore();
  const { user: authUser } = useAuthStore();
  const { createChatRoom, haveChatRoom } = useMessageHooks();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="min-h-[50px] flex w-full items-center">
        <SearchBar />
      </div>
      <div className="h-full flex flex-col gap-2">
        <p>Search Results</p>
        <div className="flex flex-col gap-2 h-full">
          {searchUserList.map((user) => {
            const name = `${user.firstname} ${user.lastname}`;
            return (
              <div
                key={user.id}
                className="w-full flex gap-2 items-center hover:bg-[#0B101B] p-2 rounded-md cursor-pointer"
                onClick={() => {
                  haveChatRoom(user.id, (hasChatRoom, chatroom) => {
                    if (hasChatRoom) {
                      navigate(`${ROUTES.MESSAGE}/${chatroom[0]?.id}`);
                    } else {
                      const payload = {
                        users: [authUser, user],
                      };

                      createChatRoom(payload, {
                        onSuccess: (chatroomId: string) =>
                          navigate(`${ROUTES.MESSAGE}/${chatroomId}`),
                      });
                    }
                  });
                }}
              >
                <Icon className="!w-10 !h-10 !bg-[#0B101B] border border-[#0B101B]">
                  {name}
                </Icon>
                <div>
                  <p className="capitalize">
                    {user.firstname} {user.lastname}
                  </p>
                  <p className="text-gray-500 text-sm">{user.username}</p>
                </div>
              </div>
            );
          })}

          {!searchUserList.length && (
            <div className="h-full flex items-center justify-center text-gray-500">
              <div className="flex flex-col justify-center items-center">
                <UserGroupIcon className="w-32 h-32" />
                <p>Search for a friend!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
