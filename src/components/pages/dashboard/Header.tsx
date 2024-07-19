import Icon from "@/components/custom/Icon";

interface Props {
  name: string;
  sub?: string;
}

const Header = ({ name, sub }: Props) => {
  return (
    <div className="flex gap-2 items-center w-full">
      <div className="flex justify-center items-center">
        <Icon className="!bg-[#0B101B] !w-12 !h-12">{name}</Icon>
      </div>
      <div className="w-full">
        <p className="capitalize text-2xl">{name}</p>
        <p className="text-gray-500">{sub!}</p>
      </div>
    </div>
  );
};

export default Header;
