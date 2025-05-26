import Navigation from "../_components/Navigation";
import SideNavigation from "../_components/SideNavigation";

export default function ({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
