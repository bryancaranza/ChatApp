import { ICommon } from "@/interface/ICommon";

const ContainerCard = ({ className, children }: ICommon) => {
  return (
    <div className={`${className} bg-gray-800 shadow-sm h-fit p-4 rounded-md`}>
      {children}
    </div>
  );
};

export default ContainerCard;
