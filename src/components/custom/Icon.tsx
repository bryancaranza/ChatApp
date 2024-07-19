import { ICommon } from "@/interface/ICommon";
// @ts-ignore
import xtype from "xtypejs";

interface IIcon extends ICommon {
  alt?: string;
}

const Icon = ({ className, children }: IIcon) => {
  const childType = xtype.type(children);

  return (
    <div
      className={`${className} bg-[#1F2937] overflow-hidden w-[50px] h-[50px] rounded-full flex justify-center items-center`}
    >
      {childType === "string" ? (
        <p>
          {children
            ?.match(/\b(\w)/g)
            ?.join("")
            .toUpperCase()}
        </p>
      ) : (
        children
      )}
    </div>
  );
};

export default Icon;
