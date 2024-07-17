import { ICommon } from "@/interface/ICommon";

const ChatLogo = ({ className }: ICommon) => {
  return (
    <svg
      className={className}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="45" fill="#2D2D2D" />
      <path
        d="M50,5a45,45 0 1,0 0,90a45,45 0 1,0 0,-90"
        fill="none"
        stroke="#FFFFFF"
        stroke-width="5"
        stroke-dasharray="282"
        stroke-dashoffset="282"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="282; 0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
      <circle cx="50" cy="50" r="35" fill="#4A90E2" />
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        fill="#FFFFFF"
        font-size="24"
        font-family="Arial"
        dy=".3em"
      >
        Chat
      </text>
    </svg>
  );
};

export default ChatLogo;
