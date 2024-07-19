import { ICommon } from "@/interface/ICommon";

const ChatIcon = ({ className }: ICommon) => {
  return (
    <svg
      className={className}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" fill="url(#pattern0_3_78)" />
      <defs>
        <pattern
          id="pattern0_3_78"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.000925926)" />
        </pattern>
        <image id="image0_3_78" width="1080" height="1080" />
      </defs>
    </svg>
  );
};

export default ChatIcon;
