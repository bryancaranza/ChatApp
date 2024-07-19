import Sidebar from "@/components/pages/dashboard/Sidebar";
import { ICommon } from "@/interface/ICommon";

const DashboardLayout = ({ className, children }: ICommon) => {
  return (
    <div
      className={`${className} bg-[#0B101B]/95 w-full h-full pt-2 flex gap-2`}
    >
      <div className="w-[25%] h-full">
        <Sidebar />
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
