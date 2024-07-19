import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useMessageHooks from "@/hooks/useMessageHooks";
import { useChatStore } from "@/state/zustand/chatStore";
import { useForm } from "react-hook-form";

const MessageBar = () => {
  const { message, setMessage } = useChatStore();
  const { sendMessages } = useMessageHooks();

  const { handleSubmit } = useForm();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onSend = () => {
    sendMessages({});
  };

  return (
    <form onSubmit={handleSubmit(onSend)}>
      <div className="flex gap-2 items-center">
        <Input
          value={message}
          onChange={onChange}
          className="bg-[#0B101B] rounded-full border-none"
          placeholder="Message"
        />
        <Button className="rounded-full bg-[#0B101B]">Send</Button>
      </div>
    </form>
  );
};

export default MessageBar;
